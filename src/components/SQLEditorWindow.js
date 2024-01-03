// SQLEditorWindow.js
import React, { useState } from 'react';

function SQLEditorWindow({ onQueryChange }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onQueryChange(e.target.value);
  };

  return (
    <textarea value={query} onChange={handleChange} />
  );
}

export default SQLEditorWindow;
