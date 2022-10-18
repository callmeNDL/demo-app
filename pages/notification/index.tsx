import { Button, Col, Form, Input, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React, { useEffect } from 'react';
import OneSignal from 'react-onesignal';
import { pushNoti } from '../../api/pushNotification';

const Notification: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    pushNoti(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    OneSignal.init({
      appId: '0fddad8e-61a1-4684-ab94-2652cd15f2e0',
    });

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Row justify="center" style={{ marginTop: 20 }}>
      <Col span={12}>
        <Form
          name="basic"
          className="notification"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input your title!' }]}
          >
            <Input placeholder="Title notification" />
          </Form.Item>

          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Please input your content!' }]}
          >
            <TextArea placeholder="content notification" />
          </Form.Item>

          <Row justify="center">
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className="btn btn--create">
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Notification;
