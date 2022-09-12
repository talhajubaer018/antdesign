import { Breadcrumb, Menu } from "antd";
import React from "react";

const BreadcrumbAD = () => {
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  General
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  Layout
                </a>
              ),
            },
            {
              key: '3',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  Navigation
                </a>
              ),
            },
          ]}
        />)
      
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">An Application</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Component</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>
          <a href="">General</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Button</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbAD;
