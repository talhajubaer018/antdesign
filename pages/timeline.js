import { Button, Timeline } from 'antd';
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';

const TimelineAD = () => {
  return (
    <div>
      <div>
        <Timeline mode='alternate' pending='Recording...' reverse={false}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined className='timeline-clock-icon' />} color='red'>
            Technical testing 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        <Timeline mode='left'>
          <Timeline.Item label='2015-09-01'>Create a services</Timeline.Item>
          <Timeline.Item label='2015-09-01 09:12:11'>Solve initial network problems</Timeline.Item>
          <Timeline.Item>Technical testing</Timeline.Item>
          <Timeline.Item color='green' label='2015-09-01 09:12:11'>Network problems being solved</Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default TimelineAD;
