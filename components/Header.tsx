
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-blue-600 dark:text-brand-blue-400">
          AI Product Photography Generator
        </h1>
        <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
          Transform your product photos into studio-quality images with AI
        </p>
      </div>
    </header>
  );
};
