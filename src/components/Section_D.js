import React from "react";
import "./css/Section_D.css";
import D_a from "./images/D_a.png";

function Section_D() {
  return (
    <div className="D_feature">
      <div className="D_components">
        <img src={D_a}></img>
        <h1>Bize Ulaşın</h1>
        <p>
          Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
          irtibata geçin
        </p>
        <ul className="nav-links">
          <li className="ctn">
            <a href="#"></a>Bize Ulaşın
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section_D;
