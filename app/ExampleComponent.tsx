// ExampleComponent.tsx
import React from 'react';
import { colonnaMT } from './fonts';

const ExampleComponent: React.FC = () => {
  return (
    <div style={{ fontFamily: colonnaMT.fontFamily }}>
      This text is using the Colonna MT font.
    </div>
  );
};

export default ExampleComponent;
