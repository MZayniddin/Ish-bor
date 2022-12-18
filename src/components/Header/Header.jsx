import './Header.scss';
import logo from '../../assets/images/logo.svg';
import defaultProfileImg from '../../assets/images/profile-default-image.svg';
import { BiSearch } from 'react-icons/bi';
import { TbMenu } from 'react-icons/tb';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeProfileButton, setactiveProfileButton] = useState(false);

  return (
    <header className='header'>
      <div className="container">
        <div className='header-logo-input-wrapper'>
          <Link to="/" className='header-logo'>
            <img src={logo} alt="inpartner" />
          </Link>
          <form action="" className='header-form'>
            <input type="text" placeholder='Qidirish' />
            <BiSearch className='header-form-search-icon' />
          </form>
        </div>
        <nav className='header-nav'>
          <div className='header-nav-item'>E'lonlar</div>
          <div className='header-nav-item'>Chat</div>
          <div className='header-nav-item'>E'lon Berish</div>
          <div className='header-profile-wrapper'>
            <div className='header-profile' onClick={() => setactiveProfileButton((e) => e ? false : true)}>
              <img src={defaultProfileImg} alt="Profileimage" />
              <MdOutlineKeyboardArrowDown className='header-profile-arrow-icon' />
            </div>
            {
              activeProfileButton ?
                <div className='header-profile-bar'>
                  <div className='header-profile-bar-item' >
                    <span>Muhammadaziz Mo'sinov</span>
                  </div>
                  <div className='header-profile-bar-item' >
                    <span>Profile</span>
                    <span>Sozlamalar</span>
                  </div>
                  <div className='header-profile-bar-item' >
                    <span>Chiqish</span>
                    <RiLogoutBoxRLine className='header-profile-bar-item-close-icon' />
                  </div>
                </div>
                : null
            }
          </div>
          <div className='header-humburger-button'>
            <TbMenu className='header-humburger-button-icon' />
          </div>
        </nav>
      </div>
    </header>
  )
}
