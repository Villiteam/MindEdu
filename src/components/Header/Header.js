import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

import menuIcon from '../../assets/images/icons/menu-mobile.svg'

const Header = () => {
  const menuHeader = [
    {
      path: '#tinh-nang',
      title: 'Tính năng'
    },
    {
      path: '/dashboard',
      title: 'Thi thử tốt nghiệp'
    },
    {
      path: '/dinh-huong-nghe-nghiep',
      title: 'Định hướng nghề nghiệp'
    },
    {
      path: '/giao-luu-hoc-tap',
      title: 'Giao lưu học tập'
    },
    {
      path: '#lien-he',
      title: 'Liên hệ'
    }
  ]

  const [activeMenuMobile, setActiveMenuMobile] = useState(false)
  return (
    <header className='header'>
      <div className='header__left'>
        <div className='header__left__menu-mobile'>
          <img src={menuIcon} onClick={() => setActiveMenuMobile(!activeMenuMobile)} />
        </div>
        <div className='header__left__logo'>
          <a href='/'>
            <span>MindEdu</span>
          </a>
        </div>
      </div>
      <div className='header__right'>
        <ul className={`header__right__menu ${activeMenuMobile ? 'active' : ''}`}>
          {
            menuHeader.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))
          }
        </ul>
        <div className='header__right__button'>
          <Link to="/login">
            <button className='btn btn-sign-in'>Đăng nhập</button>
          </Link>
          <Link to='/signup'>
            <button className='btn btn-sign-up'>Đăng kí</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header