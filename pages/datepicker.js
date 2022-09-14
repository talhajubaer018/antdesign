import { DatePicker, Space, Select, TimePicker } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';

const DatepickerAD = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const [type, setType] = useState('time');

  const PickerWithType = ({ type, onChange }) => {
    if (type === 'time') return <TimePicker onChange={onChange} />;
    if (type === 'date') return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
  };
  const range = (start, end) => {
    const result = [];

    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };
  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });
  const disabledRangeTime = (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }

    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChange2 = (dates, dateStrings) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
      console.log('Clear');
    }
  };
  return (
    <div>
      <Space direction='vertical'>
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker='week' />
        <DatePicker onChange={onChange} picker='month' />
        <DatePicker onChange={onChange} picker='quarter' />
        <DatePicker onChange={onChange} picker='year' />
      </Space>
      <Space>
        <Select value={type} onChange={setType}>
          <Option value='time'>Time</Option>
          <Option value='date'>Date</Option>
          <Option value='week'>Week</Option>
          <Option value='month'>Month</Option>
          <Option value='quarter'>Quarter</Option>
          <Option value='year'>Year</Option>
        </Select>
        <PickerWithType type={type} onChange={(value) => console.log(value)} />
      </Space>
      <Space direction='vertical' size={12}>
        <DatePicker
          format='YYYY-MM-DD HH:mm:ss'
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{
            defaultValue: moment('00:00:00', 'HH:mm:ss'),
          }}
        />
        <DatePicker picker='month' disabledDate={disabledDate} />
        <RangePicker disabledDate={disabledDate} />
        <RangePicker
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          format='YYYY-MM-DD HH:mm:ss'
        />
      </Space>
      <Space direction='vertical' size={12}>
        <RangePicker
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
          onChange={onChange}
        />
        <RangePicker
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
          showTime
          format='YYYY/MM/DD HH:mm:ss'
          onChange={onChange}
        />
      </Space>
    </div>
  );
};

export default DatepickerAD;
