import { Button, Cascader, InputNumber, Select, Space } from 'antd';
import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';

const InputnumberAD = () => {
  const { Option } = Select;
  const [value, setValue] = useState('99');

  const selectBefore = (
    <Select
      defaultValue='add'
      style={{
        width: 60,
      }}
    >
      <Option value='add'>+</Option>
      <Option value='minus'>-</Option>
    </Select>
  );
  const selectAfter = (
    <Select
      defaultValue='USD'
      style={{
        width: 60,
      }}
    >
      <Option value='USD'>$</Option>
      <Option value='EUR'>€</Option>
      <Option value='GBP'>£</Option>
      <Option value='CNY'>¥</Option>
    </Select>
  );
  return (
    <div>
      <Space direction='vertical'>
        <InputNumber addonBefore='+' addonAfter='$' defaultValue={100} />
        <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
        <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
        <InputNumber
          addonBefore={
            <Cascader
              placeholder='cascader'
              style={{
                width: 150,
              }}
            />
          }
          defaultValue={100}
        />
      </Space>
      <Space>
        <InputNumber min={1} max={10} value={value} onChange={setValue} />
        <Button
          type='primary'
          onClick={() => {
            setValue(99);
          }}
        >
          Reset
        </Button>
      </Space>
    </div>
  );
};

export default InputnumberAD;
