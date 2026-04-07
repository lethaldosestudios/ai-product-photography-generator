
import React, { useState } from 'react';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface PromptPreviewProps {
  prompt: string;
}

export const PromptPreview: React.FC<PromptPreviewProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6 h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">3. Generated Prompt</h2>
      <div className="relative flex-grow">
        <textarea
          readOnly
          value={prompt}
          className="w-full h-full p-4 pr-12 bg-gray-100 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 text-xs font-mono rounded-md resize-none border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
          aria-label="Generated prompt"
        />
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-brand-blue-500 transition-colors"
          aria-label="Copy prompt"
        >
          {copied ? <CheckIcon className="w-5 h-5 text-green-500" /> : <CopyIcon className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};
