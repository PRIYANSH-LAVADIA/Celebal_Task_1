import React from "react";
import "./css/Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">TASK ONE</h1>
        <ul className="nav-links">
          <li>
            <a href="#"></a>Çözüm ve Hizmetler
          </li>
          <li>
            <a href="#"></a>Ürünler
          </li>
          <li>
            <a href="#"></a>Teknolojiler
          </li>
          <li>
            <a href="#"></a>İnsan Kaynakları
          </li>
          <li>
            <a href="#"></a>Kurumsal
          </li>
          <li className="ctn">
            <a href="#"></a>İletişim
          </li>
        </ul>
      </nav>

      <header>
        <div className="header-content">
          <h1>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</h1>
          <p>
            {" "}
            Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
            farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
            Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız
          </p>
          <form className="input_container">
            <input type="text" placeholder="search" className="input"></input>
            <button>
              <p> search</p>
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
