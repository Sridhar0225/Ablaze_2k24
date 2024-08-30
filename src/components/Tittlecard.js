import React from "react";
import styles from "../App.module.css";
import { Link } from "react-router-dom";

function Titlecard() {
  return (
    <div>
      <div className={styles.tittle}>
        <img
          src="https://i.ibb.co/37W32CS/CSE.png"
          className={styles.cselogo}
          alt="cse logo"
        />
        {/* <img src="/CSE.png" className={styles.cselogo} alt="cse logo"/> */}
        <img src="/ablaze_2024.png" alt="ablaze24 logo" />
        {/* <img src="https://i.ibb.co/ZdHRwtD/ABLAZE2023.png" alt="Ablaze Logo" /> */}
        <h6>
          Event On 27<sup>th</sup> & 28<sup>th</sup>th September 2024
        </h6>
        <div className={styles.buttonbox}>
          <Link
            target="_blank"
            className={styles.Link}
            to="https://forms.gle/PamBdT5NziSfN8Vt6"
          >
            Click to Register
          </Link>
          <a className={styles.Link} href="/ABLAZE 2K24.png" download>
            Download Broucher
          </a>
        </div>
        <div className={styles.scrolldown}>
          <a href="#080916">
            Scroll Down For More Stuffs <br />
            &#8595;
          </a>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Titlecard);
