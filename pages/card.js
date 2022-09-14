import { Avatar, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

const CardAD = () => (
  <div className='site-card-border-less-wrapper'>
    <Card
      title='Card title'
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      hoverable
      cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
      style={{
        width: 300,
      }}
    >
      <Meta title='Europe Street beat' description='www.instagram.com' />
    </Card>
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
      actions={[<SettingOutlined key='setting' />, <EditOutlined key='edit' />, <EllipsisOutlined key='ellipsis' />]}
    >
      <Meta avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />} title='Card title' description='This is the description' />
    </Card>
  </div>
);

export default CardAD;
