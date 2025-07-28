import React, { useState } from 'react';

const StatsViewer = () => {
  const [code, setCode] = useState('');
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    const res = await fetch(`http://localhost:3000/shorturls/${code}`, {
      headers: {
        Authorization: `Bearer YOUR_BEARER_TOKEN`
      }
    });

    const data = await res.json();
    setStats(data);
  };

  return (
    <div>
      <input
        placeholder="Enter shortcode"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={fetchStats}>Get Stats</button>

      {stats && (
        <div>
          <p>Original URL: {stats.originalUrl}</p>
          <p>Created At: {stats.createdAt}</p>
          <p>Expiry At: {stats.expiryAt}</p>
          <p>Click Count: {stats.clickCount}</p>
          <ul>
            {stats.clicks.map((click, index) => (
              <li key={index}>
                {click.timestamp} - Referrer: {click.referrer || "N/A"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatsViewer;
