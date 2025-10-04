import React from 'react';

export default function Dashboard(){
  return (
    <div style={{padding:20}}>
      <h1>Acute CRM Dashboard</h1>
      <div style={{display:'flex', gap:12, marginTop:12}}>
        <div style={{padding:12, border:'1px solid #ddd', borderRadius:6}}>Sales Today<br/>₹0</div>
        <div style={{padding:12, border:'1px solid #ddd', borderRadius:6}}>Pending Repairs<br/>0</div>
        <div style={{padding:12, border:'1px solid #ddd', borderRadius:6}}>AMC Renewals (30d)<br/>0</div>
      </div>
    </div>
  )
}
