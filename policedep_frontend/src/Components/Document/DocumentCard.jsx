// DocumentCard.jsx
import React from 'react';
import './DocumentCard.css';

const DocumentCard = ({ document }) => {
    return (
        <div className="document-card">
            <h3>Document ID: {document.id}</h3>
            <p>Contents: {document.contents}</p>
        </div>
    );
};

export default DocumentCard;
