import React from 'react'
import { UserAddOutlined, } from '@ant-design/icons';

type Props = {}

const CreateUser = (props: Props) => {
  return (
    <div className='create-user bg-white'>
        <div className='create-user__title'>Quản lý người dùng</div>
        <div className='create-user__button'>
        <UserAddOutlined className='icon-add-user'/>
        </div>
    </div>
  )
}

export default CreateUser;