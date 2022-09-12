import { Button, Menu, Switch } from "antd";
import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const MenuAD = () => {
  const [current, setCurrent] = useState("mail");
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [current2, setCurrent2] = useState("1");
  const [mode, setMode] = useState("inline");

  const items = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" }, // which is required
    {
      label: "sub menu",
      key: "submenu",
      children: [{ label: "item 3", key: "submenu-item-1" }],
    },
  ];

  const items2 = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const onClick2 = (e) => {
    console.log("click ", e);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items3 = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Item 1", "g1", null, [getItem("Option 1", "1"), getItem("Option 2", "2")], "group"),
      getItem("Item 2", "g2", null, [getItem("Option 3", "3"), getItem("Option 4", "4")], "group"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")]),
    ]),
    getItem("Navigation Three", "sub4", <SettingOutlined />, [getItem("Option 9", "9"), getItem("Option 10", "10"), getItem("Option 11", "11"), getItem("Option 12", "12")]),
  ];
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };
  const onClick3 = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items5 = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Item 1", null, null, [getItem("Option 1", "1"), getItem("Option 2", "2")], "group"),
      getItem("Item 2", null, null, [getItem("Option 3", "3"), getItem("Option 4", "4")], "group"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")]),
    ]),
    getItem("Navigation Three", "sub4", <SettingOutlined />, [getItem("Option 9", "9"), getItem("Option 10", "10"), getItem("Option 11", "11"), getItem("Option 12", "12")]),
  ];
  return (
    <div>
      <Menu items={items} />
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items2} />
      <div>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu inlineCollapsed={collapsed} mode="inline" theme="dark" onClick={onClick2} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" items={items3} />
      </div>
      <div>
        <Switch onChange={changeMode} /> Change Mode
        <Switch checked={theme === "dark"} onChange={changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
        <br />
        <br />
        <Menu
          mode={mode}
          theme={theme}
          onClick={onClick3}
          style={{
            width: 256,
          }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current2]}
          items={items}
        />
      </div>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        mode="vertical"
        items={items5}
      />
    </div>
  );
};

export default MenuAD;
