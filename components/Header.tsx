import { Row, Col, Switch, Dropdown, Menu } from 'antd';
import {
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import logo from 'assets/img/logo-payMe.png';
import Link from 'next/link';

export interface IHeaderProps {}

const Header = () => {
  const handleLogout = () => {
    alert('logout');
  };

  const handleChangeLangquage = (checked: boolean) => {};

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <div onClick={handleLogout}>
              {' '}
              <InfoCircleOutlined style={{ paddingRight: '5px' }} />
              Thông tin cá nhân
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div onClick={handleLogout}>
              {' '}
              <LogoutOutlined style={{ paddingRight: '5px' }} />
              Đăng xuất
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <Row className="header" justify="space-between">
      <Col className="header__user" span={12}>
        <Link href={'/'}>
          <Image className="icon-logo" src={logo} alt="logo-payme" width={40} height={40} />
        </Link>
      </Col>
      <Row className="list-info" justify="end">
        <div className="item item--quest">
          <QuestionCircleOutlined className="icon icon--header" />
        </div>
        <div className="item item--notification">
          <BellOutlined className="icon icon--header" />
        </div>
        <Switch
          className="item item--language"
          checkedChildren="VN"
          unCheckedChildren="US"
          defaultChecked
          onChange={handleChangeLangquage}
        />
        <Dropdown overlay={menu} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
          <UserOutlined className="item item--avatar" />
        </Dropdown>
      </Row>
    </Row>
  );
};

export default Header;
