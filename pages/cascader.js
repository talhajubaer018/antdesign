import { Cascader } from "antd";
import React, { useState } from "react";

const CascaderAD = () => {
  const [text, setText] = useState("Unselected");
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];

  const options2 = [
    {
      label: "Light",
      value: "light",
      children: new Array(20).fill(null).map((_, index) => ({
        label: `Number ${index}`,
        value: index,
      })),
    },
    {
      label: "Bamboo",
      value: "bamboo",
      children: [
        {
          label: "Little",
          value: "little",
          children: [
            {
              label: "Toy Fish",
              value: "fish",
            },
            {
              label: "Toy Cards",
              value: "cards",
            },
            {
              label: "Toy Bird",
              value: "bird",
            },
          ],
        },
      ],
    },
  ];
  const onChange = (_, selectedOptions) => {
    setText(selectedOptions.map((o) => o.label).join(", "));
  };
  const filter = (inputValue, path) => path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  const displayRender = (labels) => labels[labels.length - 1];
  return (
    <div>
      <Cascader options={options} onChange={onChange} placeholder="Please select" />
      {text} &nbsp;
      <Cascader options={options} onChange={onChange} placeholder="Please select">
        <a href="#">Change City</a>
      </Cascader>
      <Cascader
        style={{
          width: "100%",
        }}
        options={options2}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
      />
      <Cascader
        displayRender={displayRender}
        expandTrigger="hover"
        defaultValue={["zhejiang", "hangzhou", "xihu"]}
        options={options}
        onChange={onChange}
        placeholder="Please select"
        showSearch={{
          filter,
        }}
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
};

export default CascaderAD;
