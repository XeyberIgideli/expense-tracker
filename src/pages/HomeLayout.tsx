import React from 'react'
import { Outlet } from 'react-router-dom';
interface LayoutProps {
  // children: React.ReactNode;
}

export const HomeLayout: React.FunctionComponent<LayoutProps> = ( ) => {
  return (<div>
    <Outlet/>
  </div>);
}