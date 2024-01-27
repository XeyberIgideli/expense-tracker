import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  // children: React.ReactNode;
}

export const AuthLayout: React.FC<LayoutProps> = () => {
  return (<div>
    <Outlet/>
  </div>);
}