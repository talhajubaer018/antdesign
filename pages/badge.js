import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Divider } from 'antd';
import React from 'react';

const BadgeAD = () => (
  <>
    <div style={{ marginRight: '25px', marginTop: '25px' }}>
      <Badge  status="success" count={99}>
        <Avatar shape='square' size='large' />
      </Badge>
    </div>
    <div style={{ marginRight: '25px', marginTop: '25px' }}>
      <Badge.Ribbon text="Hippies"  count={100}>
        <Avatar shape='square' size='large' />
      </Badge.Ribbon>
    </div>
    <div style={{ marginRight: '25px', marginTop: '25px' }}>
      <Badge count={99} overflowCount={10}>
        <Avatar shape='square' size='large' />
      </Badge>
    </div>
    <div style={{ marginRight: '25px', marginTop: '25px' }}>
      <Badge count={1000} overflowCount={999}>
        <Avatar shape='square' size='large' />
      </Badge>
    </div>
  </>
);

export default BadgeAD;
