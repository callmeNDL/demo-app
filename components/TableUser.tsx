import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect } from 'react';
import { User } from '../interfaces/data.interfaces';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { deleteData, fetchData } from '../redux/user/user.slice';

const TableUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.user.data);
  const columns: ColumnsType<User> = [
    {
      title: 'Họ Tên',
      dataIndex: 'fullname',
      key: 'fullname',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Phòng ban',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Giới tính',
      key: 'gender',
      dataIndex: 'gender',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined className="icon icon--action" />
          <DeleteOutlined
            className="icon icon--action"
            onClick={() => {
              dispatch(deleteData(record.id));
            }}
          />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return <Table columns={columns} dataSource={items} scroll={{ x: 200 }} />;
};

export default TableUser;
