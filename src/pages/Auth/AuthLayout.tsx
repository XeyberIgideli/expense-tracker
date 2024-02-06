import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Outlet, useFetcher } from 'react-router-dom';
import { User } from '../../types/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
interface LayoutProps {
  // children: React.ReactNode;
}

export const AuthLayout: React.FC<LayoutProps> = () => {
  const user = useSelector<User>(state => state.auth.data)       
  const navigate = useNavigate() 
  if(user) {
      navigate('/')
      return
  }
  return (<div>
     <Content style={{ padding: '24px 48px',backgroundColor: 'white', height: "84vh" }}> 
       <Outlet/>
    </Content>
  </div>);
}