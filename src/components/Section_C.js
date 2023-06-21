import React from "react";
import "./css/Section_C.css";
import C_a from "./images/C_a.jpg";
import C_b from "./images/C_b.jpg";
function Section_C() {
  return (
    <div className="feature">
      <div className="row">
        <div className="text-col">
          <h1>Kalite ve Süreç Yönetimi</h1>
          <p>
            Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
            sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
            Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz
            alanları güçlendirmek, uluslararası geçerliliği olan PMI®
            metodolojisini şirketinizde uygulamak ve geliştirmek için
            yanınızdayız.
          </p>
          <ul className="nav-links">
            <li className="ctn">
              <a href="#"></a>İletişim
            </li>
          </ul>
        </div>
        <div className="img-col">
          <img className="image" src={C_a} alt="hmm" />
        </div>
      </div>

      <div className="row2">
        <div className="img-col">
          <img className="image" src={C_b} alt="hmm" />
        </div>
        <div className="text-col">
          <h1>Test Yönetimi ve Analizi</h1>
          <p>
            Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek
            amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya
            da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test
            ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile
            baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi
            sunmaktadır
          </p>
          <ul className="nav-links">
            <li className="ctn">
              <a href="#"></a>İletişim
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Section_C;
