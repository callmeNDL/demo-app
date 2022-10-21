import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Spin, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { User } from '../interfaces/data.interfaces';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { deleteData, fetchData } from '../redux/user/user.slice';

const TableUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, data } = useAppSelector((state) => state.user);
  const router = useRouter();

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
      render: (_, record) => <Space size="middle">{record.gender}</Space>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link href={`/user/${record.id}`}>
            <EditOutlined className="icon icon--action" />
          </Link>
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

  return (
    <Spin spinning={loading}>
      <Table columns={columns} dataSource={data.items} scroll={{ x: 200 }} />
    </Spin>
  );
};

export default TableUser;
