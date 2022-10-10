import React from 'react';
import { Divider, Grid, Layout, Menu } from 'antd';
const {Sider } = Layout;
import { 
  UploadOutlined,
  UserOutlined, 
  VideoCameraOutlined,
  SettingOutlined,
  LogoutOutlined 
} from '@ant-design/icons';
const { useBreakpoint } = Grid;
import {routes} from '../router'


const SiderAPP = () => {
  console.log(routes);
  const screens = useBreakpoint()
  console.log(screens,'thein')
  return (
    <Sider
      className='sider'
      theme='light'
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className='sider__content' style={{ position: screens.xl? 'fixed': 'relative'}}>
        <div className="sider__content__logo" >.payme</div>
        <div className='menu-sider'>
          <Menu
            className='menu-sider__top'
            theme="light"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={routes.map(
              (item, index) => ({
                key: String(index + 1),
                icon: React.createElement(item.icon),
                label: <div className='item-sider-top'>{item.label}</div>,
                
              })
            )}
          />
          <Menu
            className='menu-sider__bottom'
            theme="light"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={[SettingOutlined, LogoutOutlined].map(
              (icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
                label: `setting ${index + 1}`,
              })
            )}
          />
          </div>
      </div>
    </Sider>
  );
}

export default SiderAPP;

