// Documents.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DocumentCard from './DocumentCard'; // Import DocumentCard component
import './Documents.css';

const Documents = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('https://localhost:7197/Document');
                setDocuments(response.data);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div className="documents-container">
            <h2>Documents</h2>
            <div className="documents-grid">
                {documents.map(document => (
                    <DocumentCard key={document.id} document={document} />
                ))}
            </div>
        </div>
    );
};

export default Documents;
