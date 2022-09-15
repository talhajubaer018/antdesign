import { Divider, Tag } from 'antd';
import React from 'react';
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, MinusCircleOutlined, SyncOutlined } from '@ant-design/icons';

const TagAD = () => {
  const log = (e) => {
    console.log(e);
  };

  const preventDefault = (e) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };
  return (
    <div>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href='https://github.com/ant-design/ant-design/issues/1862'>Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
      <Divider orientation='left'>Without icon</Divider>
      <div>
        <Tag color='success'>success</Tag>
        <Tag color='processing'>processing</Tag>
        <Tag color='error'>error</Tag>
        <Tag color='warning'>warning</Tag>
        <Tag color='default'>default</Tag>
      </div>
      <Divider orientation='left'>With icon</Divider>
      <div>
        <Tag icon={<CheckCircleOutlined />} color='success'>
          success
        </Tag>
        <Tag icon={<SyncOutlined spin />} color='processing'>
          processing
        </Tag>
        <Tag icon={<CloseCircleOutlined />} color='error'>
          error
        </Tag>
        <Tag icon={<ExclamationCircleOutlined />} color='warning'>
          warning
        </Tag>
        <Tag icon={<ClockCircleOutlined />} color='default'>
          waiting
        </Tag>
        <Tag icon={<MinusCircleOutlined />} color='default'>
          stop
        </Tag>
      </div>
    </div>
  );
};

export default TagAD;
