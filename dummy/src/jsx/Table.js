import '../css/table.css'
import React from 'react';

// VotersTable.js

function Table() {
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>1234567890</td>
                <td>john@example.com</td>
                <td>John Doe</td>
              </tr>
              {/* ... Repeat for other rows ... */}
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
