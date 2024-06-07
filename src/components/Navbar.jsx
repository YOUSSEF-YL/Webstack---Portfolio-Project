import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        {/* <img src={logo} alt="Logo" style={styles.logoImage} /> */}
        MyPortfolio
      </div>
      <div style={styles.icons}>
        <a href="https://www.linkedin.com" style={styles.icon} aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com" style={styles.icon} aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://twitter.com" style={styles.icon} aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" style={styles.icon} aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  icons: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: '#fff',
    fontSize: '20px',
    textDecoration: 'none',
  },
};

export default Navbar;
