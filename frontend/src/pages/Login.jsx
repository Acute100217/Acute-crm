import React, {useState} from 'react';
import axios from 'axios';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      window.location.href = '/';
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div style={{display:'flex', justifyContent:'center', marginTop:80}}>
      <div style={{width:320, padding:20, border:'1px solid #ddd', borderRadius:8}}>
        <h2 style={{textAlign:'center'}}>Acute CRM</h2>
        <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:8, marginBottom:8}} />
        <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%', padding:8, marginBottom:12}} />
        <button onClick={handleLogin} style={{width:'100%', padding:10, background:'#003366', color:'#fff', border:'none', borderRadius:4}}>Login</button>
      </div>
    </div>
  );
}
