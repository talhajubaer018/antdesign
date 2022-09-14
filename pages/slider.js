import { Slider, Switch } from 'antd';
import React, { useState } from 'react';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

const SliderAD = () => {
  const [disabled, setDisabled] = useState(false);

  const onChange = (checked) => {
    setDisabled(checked);
  };

  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <div className='icon-wrapper'>
        <FrownOutlined />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        <SmileOutlined />
      </div>
      
    </>
  );
};

export default SliderAD;
