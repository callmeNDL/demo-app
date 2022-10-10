import { Row, Col } from 'antd';
import { QuestionCircleOutlined, BellOutlined } from '@ant-design/icons';
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className="header">
      <Row className="header__content" justify="space-between" align="middle">
        <Col span={1}>Name</Col>
        <Col span={12}>
          <Row className="content-info" justify="end">
            <QuestionCircleOutlined />
            <div className="content-info__quest"></div>
            <BellOutlined />
          </Row>
        </Col>
      </Row>
    </header>
  );
}
