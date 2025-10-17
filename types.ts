// Fix: Added React import to resolve the 'Cannot find namespace 'JSX'' error.
import React from 'react';

export interface UmlElement {
  id: string;
  name: string;
  description: string;
  svg: JSX.Element;
}

export interface UmlCategory {
  title: string;
  elements: UmlElement[];
}
