import { Cascader, Input, Select, Space } from 'antd';
import React from 'react';
import { SettingOutlined, AudioOutlined } from '@ant-design/icons';
import Search from 'antd/lib/transfer/search';

const InputAD = () => {
  const { Search } = Input;
  const { Option } = Select;
  const selectBefore = (
    <Select defaultValue='http://' className='select-before'>
      <Option value='http://'>http://</Option>
      <Option value='https://'>https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue='.com' className='select-after'>
      <Option value='.com'>.com</Option>
      <Option value='.jp'>.jp</Option>
      <Option value='.cn'>.cn</Option>
      <Option value='.org'>.org</Option>
    </Select>
  );
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Space direction='vertical'>
        <Input addonBefore='http://' addonAfter='.com' defaultValue='mysite' />
        <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue='mysite' />
        <Input addonAfter={<SettingOutlined />} defaultValue='mysite' />
        <Input addonBefore='http://' suffix='.com' defaultValue='mysite' />
        <Input
          addonBefore={
            <Cascader
              placeholder='cascader'
              style={{
                width: 150,
              }}
            />
          }
          defaultValue='mysite'
        />
      </Space>
      <Space>
        <Search placeholder='input search text' allowClear enterButton='Search' size='large' onSearch={onSearch} enterButton />
        <Search placeholder='input search text' enterButton='Search' size='large' suffix={suffix} onSearch={onSearch} />
      </Space>
    </div>
  );
};

export default InputAD;
