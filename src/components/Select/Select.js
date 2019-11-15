import React from "react";
import ReactSelect from "react-select";

import customStyles from "./customStyles";

const Select = ({ options, onChange, defaultValue }) => (
  <ReactSelect
    defaultValue={defaultValue}
    onChange={onChange}
    options={options}
    getOptionLabel={option => {
      return option.name;
    }}
    getOptionValue={option => {
      return option;
    }}
    styles={customStyles}
  />
);

export default Select;
