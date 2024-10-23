import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`container ${styles.header}`}>
      <img src="/images/logo.png" alt="do some coding logo" />
      <ul className={styles.list}>
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};
export default Header;
