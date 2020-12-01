import { Button, Input, message } from "antd";
import React from "react";

const Hoc = (WrappedComponent) => {
  const RedundantComponent = () => {
    const [inputValue, setInputValue] = React.useState(undefined);
    const [radioValue, setRadioValue] = React.useState(null);
    const [checkedValues, setCheckedValues] = React.useState([]);

    const onChangeRadio = (e) => {
      setRadioValue(e.target.value);
    };

    const onClearBoxes = () => {
      setRadioValue(null);
      setCheckedValues([]);
    };

    function onChangeCheckbox(checkedValues) {
      setCheckedValues(checkedValues);
    }
    function handleCopyState() {
      copyToClipboard();
    }

    function applyState() {
      const newInputValue = JSON.parse(inputValue);
      setRadioValue(newInputValue.radioValue);
      setCheckedValues(newInputValue.checkedValues);
    }

    const copyToClipboard = () => {
      const textField = document.createElement("textarea");
      textField.innerText = JSON.stringify({
        radioValue,
        checkedValues
      });
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      message.success("Copied to clipboard");
      textField.remove();
      setCheckedValues([]);
      setRadioValue(null);
      setInputValue("");
    };
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter text here"
          />
          <div style={{ paddingLeft: "8px", display: "flex" }}>
            <div>
              <Button
                onClick={applyState}
                disabled={inputValue === ""}
                type="primary"
              >
                Apply state
              </Button>
            </div>
            <div style={{ paddingLeft: "3px" }}>
              <Button onClick={handleCopyState}>Copy state</Button>
            </div>
          </div>
        </div>
        <WrappedComponent
          onChangeRadio={onChangeRadio}
          onChangeCheckbox={onChangeCheckbox}
          checkedValues={checkedValues}
          radioValue={radioValue}
          onClearBoxes={onClearBoxes}
        />
      </div>
    );
  };
  return RedundantComponent;
};

export default Hoc;
