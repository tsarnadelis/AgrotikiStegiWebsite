import React from 'react';

const GMapCard = () => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d753.8402945205311!2d24.71060156822205!3d40.907826007155236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU0JzI4LjIiTiAyNMKwNDInMzguMyJF!5e0!3m2!1sel!2sgr!4v1720087319281!5m2!1sel!2sgr"
            width="100%"
            height="100%"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Αγροτική Στέγη"
            ></iframe>
        </div>
    );
};

export default GMapCard;
