import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateUser } from "../components/slice/userSlice";

const UserProfile = styled.div`
  max-width: 100%;
  max-height: 100%;
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
    <UserProfile className=" w-full h-full dark:bg-grey">
      <h1 className="dark:text-lightGrey font-bold pt-10 text-2xl">
        Hi {user.firstName}!
      </h1>
      <h2 className="dark:text-lightGrey font-bold pt-4 pb-5 text-2xl">
        Customize your profile here
      </h2>
      <form onSubmit={handleSubmit} className="w-full h-full ">
        <div>
          <label className="dark:text-lightGrey text-xl">
            Your firstname:{" "}
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="dark:text-lightGrey text-xl">Your lastname: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="dark:text-lightGrey text-xl">Your email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          className="bg-yellow rounded border-2 border-yellow w-20 h-full  dark:border-grey"
        >
          Save
        </button>
      </form>
    </UserProfile>
  );
};

export default UserPage;
