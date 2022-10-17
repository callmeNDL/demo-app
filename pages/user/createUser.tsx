import { SendOutlined } from '@ant-design/icons';
import { Button, Col, Form, Row } from 'antd';
import { useState } from 'react';
import FormCreateUser from '../../components/form/FromCreateUser';
import { CreateUserInput } from '../../models';
interface IUser {
  name: string;
}
const CreateUser = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState<CreateUserInput>();

  const handleNextStep = () => {
    console.log(form.getFieldsValue());
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <div className="create-user">
      <div className="create-user__title">Tạo tài khoản</div>
      <div className="create-user__box">
        <Col span={24} md={12} xl={8} className="box-user">
          <Form
            layout="vertical"
            className="user"
            form={form}
            onFinish={handleNextStep}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <FormCreateUser />
            <Row justify="center">
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: 120 }}
                className="btn btn--create"
              >
                Hoàn thành
              </Button>
            </Row>
          </Form>
        </Col>
      </div>
    </div>
  );
};

export default CreateUser;
