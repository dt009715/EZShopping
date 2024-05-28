import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../slices/userSlice';
import styled from 'styled-components';

const UserProfile = styled.div`
  max-width: 400px;
  text-align: left;
`;

const UserPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ firstName, lastName, email }));
  };

  return (
    <UserProfile>
      <h1>Hi {user.firstName}!</h1>
      <h2>Customize your profile here</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your firstname: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label>Your lastname: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label>Your email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br/>
        <button type="submit">Save</button>
      </form>
    </UserProfile>
  );
};

export default UserPage;