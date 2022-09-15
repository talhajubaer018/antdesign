import { Tabs } from 'antd';
import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

const TabsAD = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Tabs
        tabPosition='top'
        centered
        defaultActiveKey='1'
        onChange={onChange}
        items={[
          {
            label: `Tab 1`,
            key: '1',
            children: `Content of Tab Pane 1`,
          },
          {
            label: `Tab 2`,
            key: '2',
            children: `Content of Tab Pane 2`,
          },
          {
            label: `Tab 3`,
            key: '3',
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
      <Tabs
      type='card'
      tabPosition='left'
        size='large'
        defaultActiveKey='2'
        items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
          const id = String(i + 1);
          return {
            label: (
              <span>
                <Icon />
                Tab {id}
              </span>
            ),
            key: id,
            children: `Tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default TabsAD;
