import React from "react";
import styles from "./Button.module.css";

const Button = ({ btntext, whitebtn }) => {
  return (
    <>
      <button className={whitebtn ? styles.whitebtn : styles.blackbtn}>
        {btntext}
      </button>
    </>
  );
};

export default Button;
