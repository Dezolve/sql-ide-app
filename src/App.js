// App.js
import React, { useState } from 'react';
import axios from 'axios';
import EnvironmentSelector from './components/EnvironmentSelector.js';
import SQLEditorWindow from './components/SQLEditorWindow.js';
import JSONTable from './components/JSONTable.js';
import { downloadJSON } from './components/DownloadJSON.js'; // Adjust the path as necessary
import './App.css'; // Make sure to import the CSS file


function App() {
  const [environment, setEnvironment] = useState('DEV');
  const [query, setQuery] = useState('');
  const [queryResults, setQueryResults] = useState(null);

  const runQuery = async () => {
    try {
      const response = await axios.post('http://localhost:5000/run-query', { query });
      setQueryResults(response.data);



    } catch (error) {
      console.error('Error running query:', error);
      // Handle error
    }
};

const handleDownload = () => {
  downloadJSON(queryResults);
};


  return (
    <div className="container">
      <div className="header">
        <EnvironmentSelector onEnvironmentChange={setEnvironment} />
        <button className="button" onClick={handleDownload}>Download Results</button>
      </div>
      <div className="editor">
        <SQLEditorWindow onQueryChange={setQuery} />
        <button className="button" onClick={runQuery}>Run Query</button>
      </div>
      <div className="results">
        <JSONTable data={queryResults} />
      </div>
    </div>
  );
}

export default App;
