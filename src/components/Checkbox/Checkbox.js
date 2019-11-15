import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

const Checkbox = ({ toggleIsChecked, isChecked }) => {
  const checkboxClassNames = classNames({
    [styles.checkbox]: true,
    [styles.isChecked]: !!isChecked
  });
  return <div onClick={toggleIsChecked} className={checkboxClassNames}></div>;
};

export default Checkbox;
