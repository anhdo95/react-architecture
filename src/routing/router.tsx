import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NestingSwitch from './nesting-switch';

const Router: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <NestingSwitch />
    </BrowserRouter>
  );
};

export default Router;
