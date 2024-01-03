// DownloadJSON.js

/**
 * Function to trigger a download of JSON data.
 * @param {Object|Array} data - The JSON data to be downloaded.
 * @param {string} filename - The name of the file to be downloaded.
 */
export function downloadJSON(data, filename = 'SQLResults.json') {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
