
import React, { useState } from 'react';
import { UML_CATEGORIES } from './constants';
import { UmlElement } from './types';
import UmlSymbol from './components/UmlSymbol';
import SymbolDetail from './components/SymbolDetail';

const App: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<UmlElement | null>(null);

  const handleSelectElement = (element: UmlElement) => {
    setSelectedElement(element);
  };

  const handleCloseModal = () => {
    setSelectedElement(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-2">
            Infografía de Diagramas de Estado UML
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Una guía interactiva para entender los componentes del Lenguaje Unificado de Modelado (UML) para visualizar el comportamiento de un sistema.
          </p>
        </header>

        <main className="flex flex-col gap-10">
          {UML_CATEGORIES.map((category) => (
            <section key={category.title}>
              <h2 className="text-2xl font-bold text-cyan-400 border-b-2 border-cyan-400/30 pb-3 mb-6">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.elements.map((element) => (
                  <UmlSymbol
                    key={element.id}
                    element={element}
                    isSelected={selectedElement?.id === element.id}
                    onSelect={handleSelectElement}
                  />
                ))}
              </div>
            </section>
          ))}
        </main>
        
        {selectedElement && (
          <SymbolDetail element={selectedElement} onClose={handleCloseModal} />
        )}

        <footer className="text-center mt-16 py-6 border-t border-slate-700">
            <p className="text-slate-500 text-sm">
                made by el perro jona
            </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
