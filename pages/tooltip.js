import { Button, Tooltip } from 'antd';
import React from 'react';

const TooltipAD = () => {
  return (
    <div>
      <Tooltip placement='topLeft' title='Prompt Text'>
        <Button>Align edge / 边缘对齐</Button>
      </Tooltip>
      <Tooltip color='red' placement='topLeft' title='Prompt Text' arrowPointAtCenter>
        <Button>Arrow points to center / 箭头指向中心</Button>
      </Tooltip>
    </div>
  );
};

export default TooltipAD;
