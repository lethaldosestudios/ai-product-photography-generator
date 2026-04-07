
import React, { useCallback, useState } from 'react';
import { CameraIcon } from './icons/CameraIcon';
import { XIcon } from './icons/XIcon';

interface ImageUploaderProps {
  onFileSelect: (file: File | null) => void;
  previewUrl: string | null;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileSelect, previewUrl }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        onFileSelect(file);
      } else {
        // You might want to show an error toast here
        console.error("Invalid file type. Please upload an image.");
      }
    }
  };

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  }, []);

  const handleRemoveImage = () => {
    onFileSelect(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. Upload Product Image</h2>
      {previewUrl ? (
        <div className="relative group">
          <img src={previewUrl} alt="Product preview" className="w-full h-auto max-h-80 object-contain rounded-md bg-gray-100 dark:bg-gray-700" />
          <button
            onClick={handleRemoveImage}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-white"
            aria-label="Remove image"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200 ${isDragging ? 'border-brand-blue-500 bg-brand-blue-50 dark:bg-brand-blue-900/20' : 'border-gray-300 dark:border-gray-600 hover:border-brand-blue-400 dark:hover:border-brand-blue-500'}`}
        >
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileChange(e.target.files)}
          />
          <label htmlFor="fileInput" className="flex flex-col items-center justify-center space-y-3 cursor-pointer">
            <CameraIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-brand-blue-600 dark:text-brand-blue-400">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">JPG, PNG, or WEBP. Max 10MB.</p>
          </label>
        </div>
      )}
    </div>
  );
};
