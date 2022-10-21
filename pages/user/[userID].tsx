import { Button, Col, Form, Row, Spin } from 'antd';
import FormCreateUser from '../../components/form/FromCreateUser';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import moment from 'moment';
import Router, { useRouter } from 'next/router';
import { updateUser } from '../../redux/user/user.slice';

const UpdateUser = () => {
  const [form] = Form.useForm();
  const { items } = useAppSelector((state) => state.user.data);
  const { loading } = useAppSelector((state) => state.user);
  const dicpatch = useAppDispatch();
  const router = useRouter();
  const userID: string | string[] | undefined = router.query.userID;

  const user = items.find((item) => {
    if (item.id == userID) return item;
  });

  const handleNextStep = () => {
    let data = form.getFieldsValue();
    data.id = user?.id;
    data.birthday = moment(data.birthday).toISOString();
    if (data) {
      dicpatch(updateUser(data));
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      ...user,
      birthday: moment(moment(user?.birthday).format('DD/MM/YYYY'), 'DD/MM/YYYY'),
    });
  }, []);

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <div className="create-user">
      <div className="create-user__title">Cập nhật tài khoản</div>
      <div className="create-user__box">
        <Col span={24} md={12} xl={8} className="box-user">
          <Spin tip="Cập nhật..." spinning={loading}>
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
                  Cập nhật
                </Button>
              </Row>
            </Form>
          </Spin>
        </Col>
      </div>
    </div>
  );
};

export default UpdateUser;
