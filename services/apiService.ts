const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface GenerateImageResponse {
  success: boolean;
  data: {
    data: string;
    mimeType: string;
  };
  error?: string;
}

export async function generateProductImage(
  prompt: string, 
  file: File
): Promise<{ data: string, mimeType: string }> {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('prompt', prompt);

  const response = await fetch(`${API_BASE_URL}/api/generate`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to generate image');
  }

  const result: GenerateImageResponse = await response.json();
  
  if (!result.success || !result.data) {
    throw new Error(result.error || 'Invalid response from server');
  }

  return result.data;
}

export async function healthCheck(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
}
