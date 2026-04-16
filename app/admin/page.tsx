'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const checkDuplicates = async () => {
    setLoading(true);
    addLog('Checking for duplicates...');
    try {
      const response = await fetch('/api/check-duplicates');
      const result = await response.json();
      addLog(`Total items: ${result.total}`);
      addLog(`Duplicates found: ${result.duplicates}`);
      if (result.duplicates > 0) {
        addLog('⚠️  Duplicates detected! Consider removing them.');
      } else {
        addLog('✅ No duplicates found!');
      }
    } catch (error) {
      addLog(`❌ Error: ${error}`);
    }
    setLoading(false);
  };

  const removeDuplicates = async () => {
    setLoading(true);
    addLog('Removing duplicates...');
    try {
      const response = await fetch('/api/remove-duplicates', { method: 'POST' });
      const result = await response.json();
      addLog(`Original items: ${result.original}`);
      addLog(`After removal: ${result.after}`);
      addLog(`Removed: ${result.removed}`);
      addLog('✅ Duplicates removed successfully!');
    } catch (error) {
      addLog(`❌ Error: ${error}`);
    }
    setLoading(false);
  };

  const generateAppliances = async () => {
    setLoading(true);
    addLog('Generating new appliances...');
    try {
      const response = await fetch('/api/generate-appliances', { method: 'POST' });
      const result = await response.json();
      addLog(`Generated: ${result.generated} new appliances`);
      addLog(`Total items: ${result.total}`);
      result.byCategory.forEach((cat: any) => {
        addLog(`  ${cat.category}: ${cat.count}`);
      });
      addLog('✅ Appliances generated successfully!');
    } catch (error) {
      addLog(`❌ Error: ${error}`);
    }
    setLoading(false);
  };

  const generateSitemap = async () => {
    setLoading(true);
    addLog('Generating sitemap...');
    try {
      const response = await fetch('/api/generate-sitemap', { method: 'POST' });
      const result = await response.json();
      addLog(`Sitemap generated with ${result.urls} URLs`);
      addLog('✅ Sitemap generated successfully!');
    } catch (error) {
      addLog(`❌ Error: ${error}`);
    }
    setLoading(false);
  };

  const doAll = async () => {
    setLoading(true);
    addLog('🚀 Starting full process...');
    
    await checkDuplicates();
    await new Promise(resolve => setTimeout(resolve, 500));
    await removeDuplicates();
    await new Promise(resolve => setTimeout(resolve, 500));
    await generateAppliances();
    await new Promise(resolve => setTimeout(resolve, 500));
    await generateSitemap();
    
    addLog('✨ Full process completed!');
    addLog('⚠️  Don\'t forget to commit and push changes:');
    addLog('   git add app/[slug]/data.json public/sitemap_a.xml');
    addLog('   git commit -m "Update appliances and sitemap"');
    addLog('   git push');
    setLoading(false);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', padding: '32px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '8px' }}>Admin Dashboard</h1>
        <p style={{ color: '#9ca3af', marginBottom: '32px' }}>
          Manage appliance data and sitemap generation
        </p>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h2 style={{ color: 'white', fontSize: '20px', marginBottom: '16px' }}>Quick Actions</h2>
          
          <button
            onClick={doAll}
            disabled={loading}
            style={{
              backgroundColor: loading ? '#475569' : '#3b82f6',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              width: '100%',
              marginBottom: '16px'
            }}
          >
            {loading ? '⏳ Processing...' : '🚀 Do All (One Click)'}
          </button>
        </div>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h2 style={{ color: 'white', fontSize: '20px', marginBottom: '16px' }}>Individual Actions</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
            <button
              onClick={checkDuplicates}
              disabled={loading}
              style={{
                backgroundColor: loading ? '#475569' : '#10b981',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '14px',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              🔍 Check Duplicates
            </button>
            
            <button
              onClick={removeDuplicates}
              disabled={loading}
              style={{
                backgroundColor: loading ? '#475569' : '#f59e0b',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '14px',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              🗑️ Remove Duplicates
            </button>
            
            <button
              onClick={generateAppliances}
              disabled={loading}
              style={{
                backgroundColor: loading ? '#475569' : '#8b5cf6',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '14px',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              ➕ Generate Appliances
            </button>
            
            <button
              onClick={generateSitemap}
              disabled={loading}
              style={{
                backgroundColor: loading ? '#475569' : '#ec4899',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '14px',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              🗺️ Generate Sitemap
            </button>
          </div>

          <button
            onClick={clearLogs}
            disabled={loading}
            style={{
              backgroundColor: loading ? '#475569' : '#64748b',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '12px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            🧹 Clear Logs
          </button>
        </div>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '8px', padding: '24px' }}>
          <h2 style={{ color: 'white', fontSize: '20px', marginBottom: '16px' }}>Activity Log</h2>
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '8px',
              padding: '16px',
              minHeight: '300px',
              maxHeight: '500px',
              overflowY: 'auto',
              fontFamily: 'monospace',
              fontSize: '13px',
              lineHeight: '1.6'
            }}
          >
            {logs.length === 0 ? (
              <p style={{ color: '#6b7280' }}>No activity yet...</p>
            ) : (
              logs.map((log, index) => (
                <div key={index} style={{ color: '#d1d5db', marginBottom: '4px' }}>
                  {log}
                </div>
              ))
            )}
          </div>
        </div>

        <div style={{ marginTop: '32px', padding: '16px', backgroundColor: '#1e293b', borderRadius: '8px' }}>
          <h3 style={{ color: 'white', fontSize: '16px', marginBottom: '8px' }}>Git Commands (after running above)</h3>
          <code style={{ display: 'block', backgroundColor: '#0f172a', padding: '12px', borderRadius: '6px', color: '#10b981', fontSize: '13px', lineHeight: '1.8' }}>
            git add app/[slug]/data.json public/sitemap_a.xml<br />
            git commit -m "Update appliances and sitemap"<br />
            git push
          </code>
        </div>
      </div>
    </div>
  );
}
