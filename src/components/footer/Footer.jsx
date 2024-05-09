import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMediaSection}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <a href="#" className={styles.iconLink}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.iconLink}>
              <FaWhatsapp />
            </a>
            <a href="#" className={styles.iconLink}>
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={styles.contactSection}>
          <h4>Contact Us</h4>
          <p>Email: nec@gmail.com</p>
          <p>Phone: +977 9769420912</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
