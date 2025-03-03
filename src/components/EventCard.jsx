import React from 'react';
import './EventCard.css';

const EventCard = ({ title, description, link, image }) => {
  return (
    <div className="event-card">
      {image && <img src={image} alt={title} className="event-image" />}
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="event-link">
            View Menu
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
