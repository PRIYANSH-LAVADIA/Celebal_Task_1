import React from "react";
import "./css/Section_B.css";
import circle from "./images/circle.png";
function Section_B() {
  return (
    <div className="section_b">
      <div className="container">
        <h2>Test Yönetimiyle Neler Sağlıyoruz?</h2>
        <p>IoT Destekli Çözümler</p>
      </div>
      <div className="sub_content">
        <p>Yazılım Kalitesini Arttırıyoruz</p>
        <img src={circle}></img>
        <p>IoT Destekli Çözümler</p>
        <img src={circle}></img>
        <p>IoT Destekli Çözümler</p>
        <img src={circle}></img>
        <p>IoT Destekli Çözümler</p>
      </div>
    </div>
  );
}

export default Section_B;
