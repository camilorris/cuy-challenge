import React from "react";
import ReactSelect from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    border: "none",
    padding: 10,
    fontFamily: "Arial",
    fontSize: "12px",
    cursor: "pointer"
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontFamily: "Bungee-Regular",
    color: "#6a3091",
    fontSize: "14px"
  }),
  container: (provided, state) => ({
    ...provided,
    alignItems: "center",
    width: "30%",
    margin: "28px auto"
  }),
  control: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    border: "none",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.2)}"
  })
};

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
