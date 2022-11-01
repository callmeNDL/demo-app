import { Row, Col, Switch, Dropdown, Menu } from 'antd';
import {
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

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
        <Image
          className="icon-logo"
          src="https://payme.vn/web/images/open1/new-logo.svg"
          alt="logo-payme"
          width={120}
          height={30}
        />
      </Col>
      <Col className="list-info" span={12}>
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
      </Col>
    </Row>
  );
};

export default Header;
