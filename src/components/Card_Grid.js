import React from 'react';
import './css/Card_Grid.css';
import Aa from "./images/Aa.png";


const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cardsData = [
    {
      title: 'Döküman Analizi',
      description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      imageurl:{Aa},
    },
    {
      title: 'Kabul ve Değerlendirme',
      description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      imageUrl: '',
    },
    {
      title: 'İş Kuralları Analizi',
      description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      imageUrl: '',
    },
    {
      title: 'Akış Diyagramları',
      description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      imageurl:'E:\celebal\my-app\assets\Group 18.png',
    },
    {
      title: 'Paydaş Analizi',
      description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      imageUrl: '',
    },
    {
      title: 'Prototipleme',
      description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      imageUrl: '',
    },
  ];

  return (
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

function Card_Grid(){
  return (
    <div>
      <CardGrid />
    </div>
  );
};

export default Card_Grid;
