import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
