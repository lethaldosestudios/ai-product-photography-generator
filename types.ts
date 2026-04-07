
export interface Option {
  value: string;
  label: string;
  description: string;
}

export interface ControlSettings {
  lighting: Option;
  background: Option;
  mockup: Option;
  aspectRatio: Option;
}

export interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info';
}
