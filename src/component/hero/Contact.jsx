import React, { useState } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`container ${styles.contactPage}`}>
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      <div className={styles.contactSection}>
        <div className={styles.formSection}>
          <div className={styles.btns}>
            <Button btntext={"VIA CHAT SUPPORT"} />
            <Button btntext={"VIA CALL"} />
          </div>
          <Button whitebtn={true} btntext={"VIA FORM"} />
          <form action="">
            <Input label={"Name"} />
            <Input label={"Email"} />
            <Input formField={"textarea"} label={"Text"} />
            <div className={styles.submit}>
              <Button btntext={"Submit"} />
            </div>
          </form>
        </div>
        <div className={styles.imgSection}>
          <img src="/images/back.svg" alt="contact page img" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
