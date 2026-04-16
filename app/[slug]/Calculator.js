'use client';

import { useState } from 'react';

function Calculator({ wattage }) {
  const [hours, setHours] = useState(1);
  const [rate, setRate] = useState(10.00);
  const [result, setResult] = useState(null);

  const calculateCost = () => {
    const dailyCost = (wattage * hours * rate) / 1000;
    setResult({
      dailyCost: dailyCost.toFixed(2),
      monthlyCost: (dailyCost * 30).toFixed(2)
    });
  };

  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#d1d5db', marginBottom: '4px' }}>Hours/day</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={hours}
            onChange={(e) => setHours(parseFloat(e.target.value))}
            style={{ width: '100%', padding: '8px 12px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#d1d5db', marginBottom: '4px' }}>Rate (₱/kWh)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            style={{ width: '100%', padding: '8px 12px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }}
          />
        </div>
      </div>

      <button
        onClick={calculateCost}
        style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '10px', borderRadius: '6px', fontSize: '14px', fontWeight: '600', border: 'none', cursor: 'pointer' }}
      >
        Calculate
      </button>

      {result && (
        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '14px' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', padding: '12px' }}>
            <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>Daily</p>
            <p style={{ color: 'white', fontWeight: '600', fontSize: '18px' }}>₱{result.dailyCost}</p>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', padding: '12px' }}>
            <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>Monthly</p>
            <p style={{ color: 'white', fontWeight: '600', fontSize: '18px' }}>₱{result.monthlyCost}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;
