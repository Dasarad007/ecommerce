import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const date = new Date();
  const day = date.toLocaleDateString();
  const time = date.toLocaleTimeString();

  async function change() {
    if (!name || !email || !password) {
      alert("Please fill in all the details");
      return;
    }

    const formdata = {
      myname: name,
      myEmail: email,
      mypassword: password,
      createdDate: day,
      createdTime: time,
    };

    try {
      const result = await fetch(
        'https://68877a71071f195ca980ef32.mockapi.io/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formdata),
        }
      );

      if (result.ok) {
        alert('Account created');
        navigate('/Login');
      } else {
        alert('Failed to create account');
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      alert('Error: ' + error.message);
      setName('');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div id='div'>
      <h1>SIGNUP</h1>
      <div id='new'>
        <label>Username</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <label>Enter password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button type="button" onClick={change}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
