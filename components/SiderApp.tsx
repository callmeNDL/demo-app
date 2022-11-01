import Link from 'next/link';
import React, { useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { routes } from '../router';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const defaultKey = routes.reduce((pre: any, item: any, index) => {
    if (router.asPath.split('?')[0].includes(item.path)) {
      return index + 1;
    }
    return pre;
  }, 0);

  useEffect(() => {
    if (!defaultKey) {
      router.push('/not-found');
    }
  }, []);

  return (
    <Layout hasSider>
      <Sider
        className="sider-app"
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
        <Menu
          mode="inline"
          defaultSelectedKeys={[`${defaultKey}`]}
          items={items}
          className="menu-sider"
        />
      </Sider>
    </Layout>
  );
};

export default SiderApp;
