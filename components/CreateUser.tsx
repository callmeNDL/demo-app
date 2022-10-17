import React from 'react'
import { UserAddOutlined, } from '@ant-design/icons';

type Props = {}

const CreateUser = (props: Props) => {
  return (
    <div className='bar-user bg-white'>
        <div className='bar-user__title'>Quản lý người dùng</div>
        <div className='bar-user__button'>
        <UserAddOutlined className='icon-add-bar-user'/>
        </div>
    </div>
  )
}

export default CreateUser;