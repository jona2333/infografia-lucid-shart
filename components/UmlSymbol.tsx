
import React from 'react';
import { UmlElement } from '../types';

interface UmlSymbolProps {
  element: UmlElement;
  isSelected: boolean;
  onSelect: (element: UmlElement) => void;
}

const UmlSymbol: React.FC<UmlSymbolProps> = ({ element, isSelected, onSelect }) => {
  const baseClasses = "flex flex-col items-center justify-center text-center p-4 rounded-lg cursor-pointer transition-all duration-300 transform";
  const stateClasses = isSelected
    ? "bg-sky-500/20 border-sky-400 scale-105 shadow-lg shadow-sky-500/10"
    : "bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 hover:border-slate-500 hover:scale-105";

  return (
    <div
      onClick={() => onSelect(element)}
      className={`${baseClasses} ${stateClasses} border`}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
    >
      <div className="text-sky-300 mb-2">
        {element.svg}
      </div>
      <h3 className="text-sm font-medium text-slate-200">{element.name}</h3>
    </div>
  );
};

export default UmlSymbol;
