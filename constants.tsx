
import React from 'react';
import { UmlCategory } from './types';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const UML_CATEGORIES: UmlCategory[] = [
  {
    title: "Elementos Principales",
    elements: [
      {
        id: "inicio",
        name: "Inicio (Initial State)",
        description: "Marca el punto de partida del diagrama de estados. Es el primer estado en el que entra un objeto cuando se crea. Todo diagrama de estados debe tener un único punto de inicio.",
        svg: <IconWrapper><circle cx="12" cy="12" r="8" fill="currentColor" /></IconWrapper>,
      },
      {
        id: "estado",
        name: "Estado (State)",
        description: "Representa una condición o situación en la vida de un objeto durante la cual satisface alguna condición, realiza alguna actividad o espera algún evento. Un objeto puede permanecer en un estado por un tiempo finito. El nombre del estado se escribe dentro del rectángulo.",
        svg: <IconWrapper><rect x="3" y="6" width="18" height="12" rx="6" stroke="currentColor" /></IconWrapper>,
      },
      {
        id: "accion",
        name: "Acción (Action)",
        description: "Es una operación atómica (indivisible y de corta duración) que el objeto ejecuta. Las acciones se asocian a las transiciones (cuando ocurre un evento) o a la actividad dentro de un estado (entry, do, exit).",
        svg: <IconWrapper><rect x="3" y="6" width="18" height="12" rx="6" stroke="currentColor" /><text x="12" y="14.5" textAnchor="middle" fontSize="5" fill="currentColor">Acción</text></IconWrapper>,
      },
      {
        id: "actividad",
        name: "Actividad (Activity)",
        description: "Representa una operación que se ejecuta mientras el objeto se encuentra en un estado. A diferencia de una acción, una actividad puede tomar un tiempo considerable y puede ser interrumpida por un evento.",
        svg: <IconWrapper><rect x="3" y="6" width="18" height="12" rx="6" stroke="currentColor" /><text x="12" y="14.5" textAnchor="middle" fontSize="5" fill="currentColor">do / Actividad</text></IconWrapper>,
      },
      {
        id: "fin",
        name: "Fin (Final State)",
        description: "Indica el final del ciclo de vida del objeto. Una vez que un objeto alcanza un estado final, su participación en el diagrama de estados ha concluido.",
        svg: <IconWrapper><circle cx="12" cy="12" r="8" stroke="currentColor" /><circle cx="12" cy="12" r="5" fill="currentColor" /></IconWrapper>,
      },
    ],
  },
  {
    title: "Elementos de Flujo y Control",
    elements: [
      {
        id: "choice-merge",
        name: "Crear Rama / Fusionar (Choice / Merge)",
        description: "Se utiliza como un punto de decisión (bifurcación) donde el flujo puede seguir por uno de varios caminos posibles, dependiendo de una condición de guarda. También puede actuar como un punto de fusión (merge) para unir varias transiciones en una sola.",
        svg: <IconWrapper><path d="M12 2L22 12L12 22L2 12Z" stroke="currentColor" /></IconWrapper>,
      },
      {
        id: "fork-join",
        name: "Unión Horizontal / Bifurcación (Fork / Join)",
        description: "Bifurcación (Fork): Divide una transición en múltiples transiciones que se ejecutan de forma concurrente (en paralelo).\nUnión (Join): Sincroniza múltiples transiciones concurrentes, esperando a que todas finalicen antes de continuar con una única transición de salida.",
        svg: <IconWrapper><rect x="2" y="11" width="20" height="2.5" fill="currentColor" /></IconWrapper>,
      },
      {
        id: "history",
        name: "Pseudoestado de Historia (History Pseudostate)",
        description: "Permite que un estado compuesto 'recuerde' el último subestado activo en el que se encontraba antes de salir. Cuando se vuelve a entrar al estado compuesto a través del pseudoestado de historia, la ejecución se reanuda en el subestado recordado.",
        svg: <IconWrapper><circle cx="12" cy="12" r="8" stroke="currentColor" /><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">H</text></IconWrapper>,
      },
      {
        id: "flow-final",
        name: "Final de Flujo (Flow Final)",
        description: "Se utiliza dentro de un flujo concurrente (iniciado por una bifurcación) para indicar la terminación de ese flujo específico, sin terminar el estado completo.",
        svg: <IconWrapper><circle cx="12" cy="12" r="8" stroke="currentColor" /><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" /></IconWrapper>,
      },
    ],
  },
  {
    title: "Elementos de Señales y Eventos",
    elements: [
      {
        id: "interrupt",
        name: "Interrupción de Hardware (Hardware Interrupt / Event)",
        description: "Modela un evento externo o una señal que provoca un cambio de estado. Por ejemplo, 'presionar un botón' o 'recibir un paquete de red'.",
        svg: <IconWrapper><path d="M4 12h3l3-8 4 14 3-8h3" stroke="currentColor" /></IconWrapper>,
      },
      {
        id: "time",
        name: "Frecuencia (Time Event)",
        description: "Representa un evento de tiempo. Se utiliza para modelar transiciones que ocurren después de que ha pasado un cierto período o en un momento específico.",
        svg: <IconWrapper><path d="M6 2v4l4 4-4 4v4h12v-4l-4-4 4-4V2H6zm2 2h8v2.5L12 10l-4-3.5V4zM12 14l4 3.5V20H8v-2.5L12 14z" stroke="currentColor" fill="currentColor" fillOpacity="0.2" /></IconWrapper>,
      },
      {
        id: "send",
        name: "Enviar Señal (Send Signal)",
        description: "Representa una acción que envía una señal o un mensaje a otro objeto en el sistema.",
        svg: <IconWrapper><path d="M20 12l-8-6v12l8-6z" stroke="currentColor" transform="scale(1.5) translate(-4, -4)" /></IconWrapper>,
      },
      {
        id: "receive",
        name: "Recibir Señal (Accept Event / Receive Signal)",
        description: "Representa un evento de recepción. La transición asociada se dispara cuando se recibe una señal o evento específico.",
        svg: <IconWrapper><path d="M4 6h10l-4 6 4 6H4v-5l-2-1 2-1z" stroke="currentColor" transform="scale(1.3) translate(-2, -5)"/></IconWrapper>,
      },
    ],
  },
  {
    title: "Elementos de Estructura y Organización",
    elements: [
      {
        id: "swimlane",
        name: "Carril (Swimlane) / Piscina (Pool)",
        description: "Se utilizan en diagramas de actividad para organizar las responsabilidades de las acciones. Cada carril representa a un actor, departamento o componente del sistema, mostrando quién es responsable de realizar ciertas actividades. Una 'Piscina' agrupa varios carriles relacionados.",
        svg: <IconWrapper><rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" /><path d="M3 9h18M12 3v18" stroke="currentColor" strokeDasharray="2 2"/></IconWrapper>,
      },
      {
        id: "container",
        name: "Contenedor (Composite State)",
        description: "Representa un estado que tiene su propio sub-diagrama de estados interno. Ayuda a simplificar diagramas complejos agrupando estados y transiciones relacionadas.",
        svg: <IconWrapper><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" /><rect x="6" y="6" width="6" height="4" rx="1" stroke="currentColor" /></IconWrapper>,
      },
      {
        id: "note",
        name: "Nota (Note)",
        description: "Permite añadir comentarios, aclaraciones o restricciones al diagrama sin afectar la lógica del mismo. Se conecta a los elementos mediante una línea discontinua.",
        svg: <IconWrapper><path d="M8 3H4v18h16V7l-5-4H8z" stroke="currentColor" /><path d="M15 3v4h4" stroke="currentColor" /></IconWrapper>,
      },
      {
        id: "off-page",
        name: "Enlace fuera de páginas (Off-page Connector)",
        description: "Se usa para dividir diagramas muy grandes en varias páginas. Indica que el flujo continúa en otra parte del diagrama o en otra página, donde habrá un conector correspondiente para recibir el flujo.",
        svg: <IconWrapper><path d="M5 4h10l4 8-4 8H5l-4-8z" stroke="currentColor" /></IconWrapper>,
      },
       {
        id: "expansion",
        name: "Nodo de Expansión (Expansion Node)",
        description: "Se utiliza en los bordes de una actividad estructurada para representar un flujo de colecciones de datos. Por ejemplo, procesar cada elemento de una lista de manera individual dentro de la actividad.",
        svg: <IconWrapper><rect x="4" y="9" width="4" height="6" stroke="currentColor" /><rect x="10" y="9" width="4" height="6" stroke="currentColor" /><rect x="16" y="9" width="4" height="6" stroke="currentColor" /></IconWrapper>,
      },
       {
        id: "object",
        name: "Objeto (Object)",
        description: "Representa una instancia de una clase que está involucrada en el diagrama de estados, a menudo como el objeto que envía o recibe una señal.",
        svg: <IconWrapper><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" /><text x="12" y="13.5" textAnchor="middle" fontSize="5" fill="currentColor" style={{textDecoration: 'underline'}}>:Objeto</text></IconWrapper>,
      },
    ],
  },
];
