import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const flags = {
  en: (
    <svg className="w-5 h-5" viewBox="0 0 512 512">
      <path fill="#f0f0f0" d="M0 85.33h512v341.337H0z"/>
      <path fill="#d80027" d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"/>
      <path fill="#0052b4" d="M393.785 315.358L512 381.034v-65.676zM311.652 315.358L512 433.931v-20.094l-143.693-98.479zM458.634 433.931l-146.982-100.572v100.572z"/>
      <path fill="#f0f0f0" d="M311.652 315.358L512 433.931v-20.094l-143.693-98.479z"/>
      <path fill="#d80027" d="M311.652 315.358L512 433.931v-20.094l-143.693-98.479z"/>
    </svg>
  ),
  fr: (
    <svg className="w-5 h-5" viewBox="0 0 512 512">
      <path fill="#f0f0f0" d="M0 85.331h512v341.337H0z"/>
      <path fill="#0052b4" d="M0 85.331h170.663v341.337H0z"/>
      <path fill="#d80027" d="M341.337 85.331H512v341.337H341.337z"/>
    </svg>
  ),
  nl: (
    <svg className="w-5 h-5" viewBox="0 0 512 512">
      <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z"/>
      <path fill="#a2001d" d="M0 85.337h512v113.775H0z"/>
      <path fill="#0052b4" d="M0 312.888h512v113.775H0z"/>
    </svg>
  )
};

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gold hover:text-yellow-300 p-2 rounded-full hover:bg-red-700/50 transition-colors">
        {flags[language]}
      </button>
      <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
        {Object.entries(flags).map(([code, flag]) => (
          <button
            key={code}
            onClick={() => setLanguage(code as 'en' | 'fr' | 'nl')}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-red-50 ${
              language === code ? 'bg-red-50 text-red-600' : 'text-gray-700'
            }`}
          >
            {flag}
            <span>{code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}