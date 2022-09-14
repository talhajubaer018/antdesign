import { Checkbox, Divider } from "antd";
import React, { useState } from "react";

const CheckboxAD = () => {
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];

  const [checked, setChecked] = useState(true);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ];
  const optionsWithDisabled = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
      disabled: false,
    },
  ];

  const onChange1 = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  const onChange2 = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <div>
      <Checkbox onChange={onChange1}>Checkbox</Checkbox>
      <div>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
          Check all
        </Checkbox>
        <Divider />
        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
      </div>
      <div>
        <Checkbox.Group options={plainOptions} defaultValue={["Apple"]} onChange={onChange2} />
        <br />
        <br />
        <Checkbox.Group options={options} defaultValue={["Pear"]} onChange={onChange2} />
        <br />
        <br />
        <Checkbox.Group options={optionsWithDisabled} disabled defaultValue={["Apple"]} onChange={onChange2} />
      </div>
    </div>
  );
};

export default CheckboxAD;
