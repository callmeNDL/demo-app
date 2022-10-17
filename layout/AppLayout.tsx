import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import Header from '../components/Header';
import SiderAPP from '../components/SiderApp';

const { Content, Footer, Sider } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout className='container'>
    <SiderAPP />
    <Layout>
      <Header />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ minHeight: 360 }}>
          {children}
        </div>
      </Content>
    </Layout>
    {/* <Footer style={{ textAlign: 'center',background:"none" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
);
export default AppLayout;
