
import React, { useContext } from 'react';
import { useFetchContext } from '../context/FetchContext'
import { AuthContext } from '../context/AuthContext';

const Avatar = () => {
    const userData = localStorage.getItem("authData");
    const parsedUserData =  userData ? JSON.parse(userData) : null;
  console.log("jonny" , userData)
  return (
    <div className="avatar">
      {parsedUserData.image ? (
        <div>
        <img src={userData.image} alt="Profile Avatar" className="rounded-full w-full h-full" />
        <div>there</div>
        </div>
      ) : (
        <span>{parsedUserData.username}Hello</span>
      )}
    </div>
  );
};

export default Avatar;