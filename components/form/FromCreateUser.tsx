import React, { useState } from 'react';
import { Form, Input, Col, Row, Select, DatePicker } from 'antd';
import { checkValidatePhone } from '../../validationPhoneNumber';
import { Option } from 'antd/lib/mentions';

const FormCreateUser = () => {
  const { Option } = Select;
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  return (
    <>
      <Form.Item
        className="user__item"
        label="Họ và tên"
        name="fullname"
        rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
      >
        <Input placeholder="Họ và tên" />
      </Form.Item>
      <Form.Item
        className="user__item"
        label="Số điện thoại"
        name="phone"
        rules={[
          { required: true, message: 'Vui lòng nhập số điện thoại!' },
          {
            validator: (_, value) => {
              if (value) {
                let result = value && checkValidatePhone(value);
                if (result?.isValid) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error('Số điện thoại không hợp lệ'));
                }
              } else {
                return Promise.resolve();
              }
            },
          },
        ]}
      >
        <Input placeholder="Số điện thoại" />
      </Form.Item>
      <Form.Item
        className="user__item"
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Email không đúng định dạng!',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            label="Ngày sinh"
            required
            name="birthday"
            rules={[
              {
                required: true,
                message: 'Chọn ngày sinh!',
              },
            ]}
          >
            <DatePicker placeholder="DD-MM-YYYY" format={dateFormatList} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select a option and change input text above" allowClear>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        className="user__item"
        label="Phòng ban"
        name="department"
        rules={[{ required: true, message: 'Chọn phòng ban!' }]}
      >
        <Select placeholder="Select a option and change input text above" allowClear>
          <Option value="KT">Kỹ thuật</Option>
          <Option value="QC">QC</Option>
          <Option value="DESIGN">DESIGN</Option>
        </Select>
      </Form.Item>
    </>
  );
};

export default FormCreateUser;
