import React from "react";
import styles from "./footer.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blog</div>
      <div className="md:mt-5">
      <div className="flex items-center">
          <CiLocationOn />
          <address>28 Jackson Street,7788569 USA</address>
        </div>
        <div className="flex items-center gap-1">
          <FaPhoneAlt />
          <p>+84. 2252. 2250. 122</p>
        </div>
        <div className="flex items-center gap-1">
          <MdMarkEmailRead />
          <p>blog@gmail.com</p>
        </div>
      </div>
      <div className={styles.text}>
        blog creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
