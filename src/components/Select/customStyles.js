const customStyles = {
  option: (provided, state) => ({
    ...provided,
    border: "none",
    padding: 10,
    fontSize: "12px"
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
    border: "none",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.2)}"
  })
};

export default customStyles;
