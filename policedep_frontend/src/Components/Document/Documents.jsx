import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Documents.css"
import { TextField, Table, TableHead, TableBody, TableCell, TableRow, Paper } from '@mui/material';
import  TableSortLabel  from '@material-ui/core/TableSortLabel';
import Button from '@material-ui/core/Button';


const styles = {
    textField: {
      marginBottom: '1rem',
      height: '56px', // Adjust the height as needed
      borderRadius: '0px', // Add some border radius for a softer look
      backgroundColor: '#f8f8f8', // Change background color if needed
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    },
  };

const Documents = () => {
    const [documents, setDocuments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('crimeType');

    useEffect(() => {
        // Fetch documents from the backend server
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

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filterData = (data, searchTerm) => {
        if (!searchTerm) return data;
        return data.filter(row =>
          row.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      };

    const sortByCrimeType = (data, sortOrder, sortBy) => {
        // Perform sorting based on the sortBy field
        const sortedData = [...data].sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
          if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
          return 0;
        });
        return sortedData;
    };

    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
      };
    
    const handleSortByCrimeType = () => {
        setSortBy('crimeType');
        handleSort();
    };
    const [editableRows, setEditableRows] = useState([...documents]);

    const handleEdit = (rowId) => {
        setEditableRows(prevState => ({
          ...prevState,
          [rowId]: !prevState[rowId] // Toggle editable state
        }));
    };
 
    const handleEditChange = (value, rowId, field) => {
        setEditableRows(prevState => ({
          ...prevState,
          [rowId]: {
            ...prevState[rowId],
            [field]: value
          }
        }));
    };
    const handleToggleEdit = (rowId) => {
        setEditableRows(prevState => ({
          ...prevState,
          [rowId]: !prevState[rowId]
        }));
    };

    const handleUpdateSave = (rowId) => {
        const updatedRow = editableRows[rowId];
        fetch(`https://localhost:7197/Document/${rowId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedRow),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update document');
          }
          setEditableRows(prevState => ({
            ...prevState,
            [rowId]: false 
          }));
        })
        .catch(error => {
          console.error('Error updating document:', error);
        });
    };
    const filteredData = filterData(documents, searchTerm);
    const sortedData = sortByCrimeType(filteredData, sortOrder, sortBy);

    return (
        <div>
        <h2>Documents</h2>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '1rem' }}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'title'}
                  direction={sortOrder}
                  onClick={() => handleSort('title')}
                >
                  Title
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'station'}
                  direction={sortOrder}
                  onClick={() => handleSort('station')}
                >
                  Station
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'contents'}
                  direction={sortOrder}
                  onClick={() => handleSort('contents')}
                >
                  Contents
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'crimeType'}
                  direction={sortOrder}
                  onClick={() => handleSort('crimeType')}
                >
                  Crime Type
                </TableSortLabel>
              </TableCell>
              <TableCell>
                Last Modified By
              </TableCell>
              <TableCell>
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  {editableRows[row.id] ? (
                   <TextField
                   value={editableRows[row.id]?.title || ''}
                   onChange={(e) => handleEditChange(e.target.value, row.id, 'title')}
                   />
                  ) : row.title}
                </TableCell>
                <TableCell>
                  {editableRows[row.id] ? (
                    <TextField
                    value={editableRows[row.id]?.station || ''}
                    onChange={(e) => handleEditChange(e.target.value, row.id, 'station')}
                    />
                  ) : row.station}
                </TableCell>
                <TableCell>
                  {editableRows[row.id] ? (
                    <TextField
                    value={editableRows[row.id]?.contents || ''}
                    onChange={(e) => handleEditChange(e.target.value, row.id, 'contents')}
                    />
                  ) : row.contents}
                </TableCell>
                <TableCell>
                  {editableRows[row.id] ? (
                    <TextField
                    value={editableRows[row.id]?.crimeType || ''}
                    onChange={(e) => handleEditChange(e.target.value, row.id, 'crimeType')}
                    />
                  ) : row.crimeType}
                </TableCell>
                <TableCell>{row.lastModifiedBy}</TableCell>
                <TableCell>
                {editableRows[row.id] ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdateSave(row.id)}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleToggleEdit(row.id)}
                  >
                    Edit
                  </Button>
                )}
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
};

export default Documents;
