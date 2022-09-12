import { Button, Card, Space } from "antd";
import React from "react";

const SpaceAD = () => {
  return (
    <div>
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
      <div className="space-align-container">
        <div className="space-align-block">
          <Space align="center">
            center
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="space-align-block">
          <Space align="start">
            start
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="space-align-block">
          <Space align="end">
            end
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="">
          <Space align="center" size={20}>
            baseline
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default SpaceAD;
