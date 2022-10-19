import React from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import Link from 'next/link';

type Props = {};

const CreateUser = (props: Props) => {
  return (
    <div className="bar-user bg-white">
      <div className="bar-user__title">Quản lý người dùng</div>
      <Link href="/user/createUser">
        <div className="bar-user__button">
          <UserAddOutlined className="icon-add-bar-user" />
        </div>
      </Link>
    </div>
  );
};

export default CreateUser;
