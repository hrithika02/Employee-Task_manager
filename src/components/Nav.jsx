import React from 'react';
import profile from '../assets/images/profile.png';
import icons from '../assets/images/icon.png';

const Nav = ({ user }) => {
  return (
    <nav className="navbar flex items-center text-2xl justify-between text-black border-b-2 border-gray-300 p-2">
      <div className="logo flex items-center justify-center px-4">
        <img src={icons} alt="Logo" className="logo-icon w-10 h-10 mr-2" />
        <span className="logo-text">ShiftFlow</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="username text-lg font-semibold">{user.username}</span>
        <img src={profile} alt="Profile" className="profile-pic w-14 h-14" />
      </div>
    </nav>
  );
};

export default Nav;
