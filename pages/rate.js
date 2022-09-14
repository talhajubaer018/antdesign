import { Rate } from 'antd';
import React, { useState } from 'react';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons'

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const RateAD = () => {
  const [value, setValue] = useState(3);
  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />

      {value ? <span className='ant-rate-text'>{desc[value - 1]}</span> : ''}
      <Rate defaultValue={2} character={({ index }) => index + 1} />
      <br />
      <Rate allowHalf  defaultValue={3} character={({ index }) => customIcons[index + 1]} />
    </span>
  );
};

export default RateAD;
