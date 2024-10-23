import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, formField }) => {
  return (
    <>
      {formField === "textarea" ? (
        <div className={styles.inputDiv}>
          <label>{label}</label>
          <textarea rows={6}></textarea>
        </div>
      ) : (
        <div className={styles.inputDiv}>
          <label>{label}</label>
          <input type="text" />
        </div>
      )}
    </>
  );
};

export default Input;
