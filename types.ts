import React from 'react';

export interface UmlElement {
  id: string;
  name: string;
  description: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  svg: React.ReactElement;
}

export interface UmlCategory {
  title: string;
  elements: UmlElement[];
}
