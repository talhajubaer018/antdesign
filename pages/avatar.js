import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Badge, Tooltip } from 'antd';
import React from 'react';

const AvatarAD = () => (
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size='large' icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size='small' icon={<UserOutlined />} />
    </div>
    <div>
      <Avatar shape='square' size={64} icon={<UserOutlined />} />
      <Avatar shape='square' size='large' icon={<UserOutlined />} />
      <Avatar shape='square' icon={<UserOutlined />} />
      <Avatar shape='square' size='small' icon={<UserOutlined />} />
    </div>
    <Avatar.Group>
      <Avatar src='https://joeschmoe.io/api/v1/random' />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title='Ant User' placement='top'>
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Badge dot count={1}>
      <Avatar
        style={{
          backgroundColor: '#87d068',
        }}
        icon={<UserOutlined />}
      />
    </Badge>
  </>
);

export default AvatarAD;
