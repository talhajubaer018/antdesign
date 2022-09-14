import { Radio } from 'antd';
import React, { useState } from 'react';

const RadioAD = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <Radio.Group defaultValue='a' buttonStyle='solid'>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group
        defaultValue='c'
        buttonStyle='solid'
        style={{
          marginTop: 16,
        }}
      >
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b' disabled>
          Shanghai
        </Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
    </div>
  );
};
export default RadioAD;
