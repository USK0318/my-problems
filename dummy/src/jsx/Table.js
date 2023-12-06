import React, { useState } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SaveIcon from '@mui/icons-material/Save';
import '../css/table.css';
import CancelIcon from '@mui/icons-material/Cancel';

function Table() {
  const initialData = [
    { id: 1, name: 'John Doe', number: '1234567890', email: 'john@example.com', fatherName: 'John Doe' },
    // Add other data objects as needed
  ];

  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleEditClick = (index, currentName) => {
    setEditIndex(index);
    setEditName(currentName);
  };

  const handleSaveClick = (index) => {
    const newData = [...data];
    newData[index].name = editName;
    setData(newData);
    setEditIndex(null);
    console.log(`the data is`,data)
    console.log(`the index`,editIndex)

  };

  const handleCancelClick = () => {
    setEditIndex(null);
  };

  return (
    <div className="custom-body">
      <div className="container">
      <h1 className="title">Voters Table</h1>

<div className="filters">
  <label htmlFor="mobileFilter">Mobile Number:</label>
  <select className="filter-select" id="mobileFilter">
    <option value="">All</option>
    <option value="1234567890">1234567890</option>
    <option value="9876543210">9876543210</option>
  </select>

  <label htmlFor="ageFilter">Age:</label>
  <select className="filter-select" id="ageFilter">
    <option value="">All</option>
    <option value="20">20</option>
    <option value="25">25</option>
    <option value="30">30</option>
  </select>

  <label htmlFor="fatherNameFilter">Father's Name:</label>
  <select className="filter-select" id="fatherNameFilter">
    <option value="">All</option>
    <option value="John Doe">John Doe</option>
    <option value="Jane Doe">Jane Doe</option>
  </select>
</div>

        <div className="table-container">
          <table className="dataTable">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Father Name</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      row.name
                    )}
                  </td>
                  <td>{row.number}</td>
                  <td>{row.email}</td>
                  <td>{row.fatherName}</td>
                  <td>
                    {editIndex === index ? (
                      <>
                        <button onClick={() => handleSaveClick(index)}>{<SaveIcon/>}</button>
                        <button onClick={handleCancelClick}>{<CancelIcon/>}</button>
                      </>
                    ) : (
                      <BorderColorIcon onClick={() => handleEditClick(index, row.name)} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="add-new-button">
          <button>Add New</button>
        </div>
      </div>
    </div>
  );
}

export default Table;
