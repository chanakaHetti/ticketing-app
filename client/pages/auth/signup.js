import { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [password, usePassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    console.log(email, password);
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
