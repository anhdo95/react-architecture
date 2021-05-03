import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NestingSwitch from './nesting-switch';

const Router: React.FC = ({ children }: PropsWithChildren<any>) => (
  <BrowserRouter>
    {children}
    <NestingSwitch />
  </BrowserRouter>
);

export default Router;
