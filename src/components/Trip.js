import "./css/Trip.css";
import Trip_data from "./Trip_data";
import Aa from "./images/Aa.png";
import Ab from "./images/Ab.png";
import Ac from "./images/Ac.png";
import Ad from "./images/Ad.png";
import Ae from "./images/Ae.png";
import Af from "./images/Af.png";

function Trip() {
  return (
    <div>
      <div className="trip_1">
        <h1>Kalite ve Süreç Yönetimi</h1>
        <p>
          Müşterilerimizin yüksek kalite seviyelerini<br></br> koruyabilmeleri
          için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          <br></br> Yönetimi, İş Analizi ve Test Yönetimi hizmetleri
          sunmaktayız.
        </p>
      </div>
      <div className="trip_2">
        <div className="tripcard">
          <Trip_data
            image={Aa}
            heading="Akış Diyagramları"
            text="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
          <Trip_data
            image={Ab}
            heading="Kabul ve Değerlendirme"
            text="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
          <Trip_data
            image={Ac}
            heading="İş Kuralları Analizi"
            text="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
        </div>
      </div>
      <div className="trip_2">
        <div className="tripcard">
        <Trip_data
          image={Ad}
          heading="İş Kuralları Analizi"
          text="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
        <Trip_data
          image={Ae}
          heading="İş Kuralları Analizi"
          text="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
        <Trip_data
          image={Af}
          heading="İş Kuralları Analizi"
          text="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
        </div>
      </div>
    </div>
  );
}

export default Trip;
