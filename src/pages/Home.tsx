import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd'; 
 
interface HomeProps {
  // children: React.ReactNode;
}

export const Home: React.FC<HomeProps> = () => {
    const {
        token: {borderRadiusLG },
      } = theme.useToken();
    
      return (
        <>
            <div
              style={{  
                borderRadius: borderRadiusLG,
              }}
            >
              Content
            </div>
        </>
      );
}