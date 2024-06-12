import React from 'react';
import './ContactCard.css';

const ContactCard = ({ contact }) => {
    return (
        <div className="contact-card">
            <h2>Τηλέφωνο</h2>
            {contact.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}
            <h2>Email</h2>
            {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
        </div>
    );
};

export default ContactCard;