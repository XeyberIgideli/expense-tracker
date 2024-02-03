import React from "react"
import { Layout, Menu } from 'antd';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { User } from "../types/auth";
const { Header: AntdHeader } = Layout;


export const Header: React.FC = () => {
    const user = useSelector<User>(state => state.auth.data)       
    return (
        <Layout>
            <AntdHeader style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']} 
                style={{ flex: 1, minWidth: 0 }}
                >
                    <Menu.Item key="1"><NavLink to="/">Home</NavLink></Menu.Item>
                   {!user && (<Menu.Item key="2"><NavLink to="auth/login">Login</NavLink></Menu.Item>)}
                   {!user && (<Menu.Item key="3"><NavLink to="auth/register">Register</NavLink></Menu.Item>)}
                </Menu>
            </AntdHeader>
        </Layout>
    )
}