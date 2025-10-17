import React, { useEffect } from 'react';
import { UmlElement } from '../types';

interface SymbolDetailProps {
  element: UmlElement;
  onClose: () => void;
}

const SymbolDetail: React.FC<SymbolDetailProps> = ({ element, onClose }) => {
  // Effect to handle 'Escape' key press for closing the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in-fast"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="symbol-title"
    >
      <div
        className="relative bg-slate-800 border border-slate-700 rounded-lg p-6 sm:p-8 w-full max-w-2xl flex flex-col animate-scale-in"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 pb-6 border-b border-slate-700">
          <div className="flex-shrink-0 text-sky-400 bg-slate-900 p-4 rounded-lg">
            {React.cloneElement(element.svg, { className: "w-16 h-16" })}
          </div>
          <h2 id="symbol-title" className="text-2xl sm:text-3xl font-bold text-sky-400 text-center sm:text-left">{element.name}</h2>
        </div>
        <div className="prose prose-invert prose-p:text-slate-300 prose-p:leading-relaxed whitespace-pre-line text-base max-h-[50vh] overflow-y-auto pr-2">
            <p>{element.description}</p>
        </div>
      </div>
      <style>{`
          @keyframes fade-in-fast {
              from { opacity: 0; }
              to { opacity: 1; }
          }
          @keyframes scale-in {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in-fast {
              animation: fade-in-fast 0.2s ease-out forwards;
          }
          .animate-scale-in {
              animation: scale-in 0.2s ease-out forwards;
          }
      `}</style>
    </div>
  );
};

export default SymbolDetail;
