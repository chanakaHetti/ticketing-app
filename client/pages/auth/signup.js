import { useState } from 'react';
import axios from 'axios';

export default () => {
  const [email, setEmail] = useState('');
  const [password, usePassword] = useState('');

  const onSubmit = async event => {
    event.preventDefault();
    
    const response = await axios.post('http://localhost:3000/api/users/signup', {
      email, password
    });

    console.log('response', response)
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>

      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          value={password}
          onChange={e => usePassword(e.target.value)}  
        />
      </div>

      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
