import { Select, Tag } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectAD = () => {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  const options = [
    {
      value: 'gold',
    },
    {
      value: 'lime',
    },
    {
      value: 'green',
    },
    {
      value: 'cyan',
    },
    {
      value: 'red',
    },
  ];

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <>
      <Select
        labelInValue
        mode='multiple'
        defaultValue='lucy'
        style={{
          width: 120,
        }}
        onChange={handleChange}
      >
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='disabled' disabled>
          Disabled
        </Option>
        <Option value='Yiminghe'>yiminghe</Option>
      </Select>
      <Select
        defaultValue='lucy'
        style={{
          width: 120,
        }}
        disabled
      >
        <Option value='lucy'>Lucy</Option>
      </Select>
      <Select
        defaultValue='lucy'
        style={{
          width: 120,
        }}
        loading
      >
        <Option value='lucy'>Lucy</Option>
      </Select>
      <Select
        defaultValue='lucy'
        style={{
          width: 120,
        }}
        allowClear
      >
        <Option value='lucy'>Lucy</Option>
      </Select>
      <Select
        defaultValue={provinceData[0]}
        style={{
          width: 120,
        }}
        onChange={handleProvinceChange}
      >
        {provinceData.map((province) => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select
        showSearch
        style={{
          width: 120,
        }}
        value={secondCity}
        onChange={onSecondCityChange}
      >
        {cities.map((city) => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
      <Select
        mode='multiple'
        showArrow
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{
          width: '100%',
        }}
        options={options}
      />
    </>
  );
};

export default SelectAD;
