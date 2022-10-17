import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  username: string;
  email: string;
  sdt:string;
  role:string;
  dateCreate: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Họ Tên',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Tên đăng nhập',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'sdt',
    key: 'sdt',
  },
  {
    title: 'Chức vụ',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'dateCreate',
    key: 'dateCreate',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined  className='icon icon--action'/>
        <DeleteOutlined className='icon icon--action'/>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Nguyen Duc Long 1',
    username: "nguyenduclong",
    email:"nguyenduclong@gmail.com",
    sdt:"043229289",
    role:"Nhân Viên",
    dateCreate: '11/10/2022',
   
  },
  {
    key: '2',
    name: 'Nguyen Duc Long 2',
    username: "nguyenduclong2",
    email:"nguyenduclong@gmail.com",
    sdt:"043229289",
    role:"Nhân Viên",
    dateCreate: '11/10/2022',
  },
  {
    key: '3',
    name: 'Nguyen Duc Long 3',
    username: "nguyenduclong3",
    email:"nguyenduclong@gmail.com",
    sdt:"043229289",
    role:"Nhân Viên",
    dateCreate: '11/10/2022',
  },
  {
    key: '4',
    name: 'Nguyen Duc Long 4',
    username: "nguyenduclong4",
    email:"nguyenduclong@gmail.com",
    sdt:"043229289",
    role:"Nhân Viên",
    dateCreate: '11/10/2022',
  }, {
    key: '5',
    name: 'Nguyen Duc Long 5',
    username: "nguyenduclong5",
    email:"nguyenduclong@gmail.com",
    sdt:"043229289",
    role:"Nhân Viên",
    dateCreate: '11/10/2022',
  }, {
    key: '6',
    name: 'Nguyen Duc Long 6',
    username: "nguyenduclong6",
    email:"nguyenduclong@gmail.com",
    sdt:"043229289",
    role:"Nhân Viên",
    dateCreate: '11/10/2022',
  },
  
];

const TableUser: React.FC = () => <Table columns={columns} dataSource={data}  scroll={{x:200}} />;

export default TableUser;