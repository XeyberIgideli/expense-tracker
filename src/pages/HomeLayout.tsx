import React from 'react'
import { Outlet } from 'react-router-dom';
import { Breadcrumb, Layout, theme } from 'antd'; 
const {Content, Footer } = Layout;

interface LayoutProps {
  // children: React.ReactNode;
}

export const HomeLayout: React.FunctionComponent<LayoutProps> = ( ) => {
  return (
  <Layout>
    <Content style={{ padding: '24px 48px',backgroundColor: 'white', height: "84vh" }}> 
       <Outlet/>
    </Content>
  </Layout>
  );
}