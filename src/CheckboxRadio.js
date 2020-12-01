import { Radio, Checkbox, Button } from "antd";
import React from "react";
import Hoc from "./hoc.js";

const CheckboxRadio = ({
  onChangeCheckbox,
  onChangeRadio,
  checkedValues,
  radioValue,
  onClearBoxes
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "16px"
      }}
    >
      <div>
        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onChangeCheckbox}
          defaultValue={checkedValues}
          value={checkedValues}
        >
          <Checkbox value="AA">AA</Checkbox>
          <Checkbox value="BB">BB</Checkbox>
          <Checkbox value="CC">CC</Checkbox>
          <Checkbox value="DD">DD</Checkbox>
          <Checkbox value="EE">EE</Checkbox>
        </Checkbox.Group>
        <Radio.Group onChange={onChangeRadio} value={radioValue}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
      <div>
        <Button
          onClick={onClearBoxes}
          disabled={!radioValue && checkedValues.length === 0}
        >
          Clear State
        </Button>
      </div>
    </div>
  );
};

export default Hoc(CheckboxRadio);
