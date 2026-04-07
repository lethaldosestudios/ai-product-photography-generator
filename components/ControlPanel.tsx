
import React from 'react';
import type { ControlSettings, Option } from '../types';
import { LIGHTING_OPTIONS, BACKGROUND_OPTIONS, MOCKUP_OPTIONS, ASPECT_RATIO_OPTIONS } from '../constants';

interface ControlPanelProps {
  settings: ControlSettings;
  onSettingsChange: <K extends keyof ControlSettings,>(key: K, value: ControlSettings[K]) => void;
}

const ControlSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">{title}</h3>
        {children}
    </div>
);

const CustomSelect: React.FC<{ options: Option[], value: Option, onChange: (option: Option) => void, id: string }> = ({ options, value, onChange, id }) => (
    <select 
        id={id}
        value={value.value}
        onChange={(e) => {
            const selectedOption = options.find(opt => opt.value === e.target.value);
            if (selectedOption) onChange(selectedOption);
        }}
        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 transition"
    >
        {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
);


export const ControlPanel: React.FC<ControlPanelProps> = ({ settings, onSettingsChange }) => {
    return (
        <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">2. Customize Your Shot</h2>
            <div className="space-y-6">
                <ControlSection title="Lighting Style">
                    <CustomSelect id="lighting" options={LIGHTING_OPTIONS} value={settings.lighting} onChange={(val) => onSettingsChange('lighting', val)} />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">{settings.lighting.description}</p>
                </ControlSection>

                <ControlSection title="Background & Scene">
                    <CustomSelect id="background" options={BACKGROUND_OPTIONS} value={settings.background} onChange={(val) => onSettingsChange('background', val)} />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">{settings.background.description}</p>
                </ControlSection>

                <ControlSection title="Mockup Type">
                    <div className="grid grid-cols-2 gap-2">
                        {MOCKUP_OPTIONS.map(option => (
                            <button key={option.value} onClick={() => onSettingsChange('mockup', option)}
                                className={`text-sm text-left p-3 rounded-md transition-colors duration-200 ${settings.mockup.value === option.value ? 'bg-brand-blue-600 text-white shadow' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                            >
                                <span className="font-semibold block">{option.label}</span>
                                <span className="text-xs opacity-80 hidden sm:block">{option.description}</span>
                            </button>
                        ))}
                    </div>
                </ControlSection>

                <ControlSection title="Aspect Ratio">
                    <div className="flex space-x-2">
                        {ASPECT_RATIO_OPTIONS.map(option => (
                           <button key={option.value} onClick={() => onSettingsChange('aspectRatio', option)}
                                className={`w-full p-2 rounded-md text-sm font-semibold transition-colors duration-200 ${settings.aspectRatio.value === option.value ? 'bg-brand-blue-600 text-white shadow' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                            >
                               {option.label}
                           </button>
                        ))}
                    </div>
                </ControlSection>
            </div>
        </div>
    );
};
