import './Header.css'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import React , { useState } from 'react';
import { ProfilePopUp } from './ProfilePopUp';

export const Header = () => {
  const[isProfilePopUpOpen,setIsProfilePopUpOpen]=useState(false);

  const handleProfileClick=()=>{
    setIsProfilePopUpOpen(true);
  }
  const handleProfilePopUpClose=()=>{
    setIsProfilePopUpOpen(false);
  }

  return (
    <div className='header-container'>
        <div className='header-left'>
            <div className='header-search'>
                <span><CiSearch /></span>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className='header-right'>
            <span onClick={handleProfileClick}><CgProfile size='35px'color='var(--DarkGray)' /></span>
            <span><p>Profile Name</p></span>
        </div>
        <ProfilePopUp 
            isOpen={isProfilePopUpOpen}
            onClose={handleProfilePopUpClose}
            />
    </div>
  )
}
