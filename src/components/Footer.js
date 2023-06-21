import React from "react";
import "./css/Footer.css";
import social from "./images/social.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        
        <div className="footer_row">
          <div className="footer_col">
            <h4 className="footer_head">Çözüm ve Hizmetler </h4>
            <ul>
              <li>
                <a href="#">Yazılım Geliştirme</a>
              </li>
              <li>
                <a href="#">Outsourcing</a>
              </li>
              <li>
                <a href="#">Kalite ve Süreç Yönetimi</a>
              </li>
              <li>
                <a href="#">Danışmanlık</a>
              </li>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="footer_head">Çözüm ve Hizmetler </h4>
            <ul>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="footer_head">Çözüm ve Hizmetler </h4>
            <ul>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="footer_head">Çözüm ve Hizmetler </h4>
            <ul>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
              <li>
                <a href="#">IoT Destekli Çözümle</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_nav">
          <h4>© Copyright 2023-2024 - Can Çevik</h4>
          <img src={social}></img>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
