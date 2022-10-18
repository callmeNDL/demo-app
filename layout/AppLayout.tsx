import { Grid, Layout } from 'antd';
import React from 'react';
import Header from '../components/Header';
import SiderAPP from '../components/SiderApp';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const screens = useBreakpoint();
  const leftContert = screens.lg ? 265 : 65;

  return (
    <Layout className="container">
      <Layout>
        <Header />
        <SiderAPP />
        <Content style={{ marginLeft: leftContert }}>
          <div className="site-layout-background" style={{ minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
      {/* <Footer style={{ textAlign: 'center',background:"none" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
};

export default AppLayout;
