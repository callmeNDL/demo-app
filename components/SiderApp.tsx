import Link from 'next/link';
import React from 'react';

import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import { routes } from '../router';

const { Sider } = Layout;

const items: MenuProps['items'] = routes.length
  ? routes.map((item, index) => ({
      key: String(index + 1),
      icon: React.createElement(item.icon),
      label: (
        <Link href={item.path}>
          <a>{item.label}</a>
        </Link>
      ),
    }))
  : [];

const SiderApp = () => {
  return (
    <Layout hasSider>
      <Sider
        breakpoint="lg"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: '64px',
          bottom: 0,
          background: '#f9fbff',
        }}
        width={280}
      >
        <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
    </Layout>
  );
};

export default SiderApp;
