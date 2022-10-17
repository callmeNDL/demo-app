import React from 'react';
import { Divider, Grid, Layout, Menu } from 'antd';
const { Sider } = Layout;
import { routes } from '../router';

const { useBreakpoint } = Grid;
const SiderAPP = () => {
  const screens = useBreakpoint();

  return (
    <Sider
      className="sider"
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
    >
      <div className="sider__content" style={{ position: screens.xl ? 'fixed' : 'relative' }}>
        <div className="sider__content__logo">.payme</div>
        <div className="menu-sider">
          <Menu
            className="menu-sider__top"
            theme="light"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={routes.map((item, index) => ({
              key: String(index + 1),
              icon: React.createElement(item.icon),
              label: <div className="item-sider-top">{item.label}</div>,
            }))}
          />
        </div>
      </div>
    </Sider>
  );
};

export default SiderAPP;
