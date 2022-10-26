import { Button, Col, Form, Row, Spin } from 'antd';
import moment from 'moment';
import FormCreateUser from '../../components/form/FromCreateUser';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createUser } from '../../redux/user/user.slice';

const CreateUser = () => {
  const [form] = Form.useForm();
  const dicpatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);

  const handleNextStep = () => {
    let data = form.getFieldsValue();
    data.birthday = moment(data.birthday).toISOString();
    if (data) {
      dicpatch(createUser(data));
    }
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <div className="create-user">
      <div className="create-user__title">Tạo tài khoản</div>
      <Spin tip="Tạo người dùng ..." spinning={loading}>
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
      </Spin>
    </div>
  );
};

export default CreateUser;
