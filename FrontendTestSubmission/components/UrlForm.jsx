
import React, { useState } from 'react';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { url };
    if (validity) body.validity = parseInt(validity);
    if (shortcode) body.shortcode = shortcode;

    const response = await fetch('http://localhost:3000/shorturls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer YOUR_BEARER_TOKEN`
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <input placeholder="Validity (minutes)" value={validity} onChange={(e) => setValidity(e.target.value)} />
        <input placeholder="Shortcode (optional)" value={shortcode} onChange={(e) => setShortcode(e.target.value)} />
        <button type="submit">Shorten</button>
      </form>
      {result && (
        <div style={{ marginTop: '1rem' }}>
          <p>Short URL: <a href={result.shortLink} target="_blank" rel="noreferrer">{result.shortLink}</a></p>
          <p>Expires At: {result.expiry}</p>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
