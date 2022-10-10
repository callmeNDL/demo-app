import { Row, Col,Switch } from 'antd';
import { QuestionCircleOutlined, BellOutlined,UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import logo from '../assets/img/logo-payMe.png'

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
      <Row className="header" justify='space-between'>
        <Col className='header__user' span={12}> 
          <Image
          className='icon-logo'
          src={logo}
          alt="logo-payme"
          width={40}
          height={40}
          />
        </Col>
        <Row className='list-info' justify='end'>
            <div className='item item--quest'>
              <QuestionCircleOutlined />
            </div>
            <div className="item item--notification">
              <BellOutlined />
            </div>
            <Switch className="item item--language" checkedChildren="VN" unCheckedChildren="US" defaultChecked />
            <UserOutlined className="item item--avatar" />
        </Row>
      </Row>
  );
}
