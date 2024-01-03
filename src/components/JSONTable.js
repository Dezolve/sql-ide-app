// JSONTable.js
import React from 'react';

function JSONTable({ data }) {
  // Check if data is not empty and is an array
  if (!data || !Array.isArray(data)) {
    return <p>No data to display</p>;
  }

  // Assuming each object in the array has the same keys
  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map(header => <td key={`${index}-${header}`}>{row[header]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JSONTable;
