import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss'
import { signOut } from "firebase/auth";
import { auth } from '../../utils/Firebase';
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../redux/reducers/userReducer';

import menuIcon from '../../assets/images/icons/menu-mobile.svg'
import userIcon from '../../assets/images/icons/programmer.png'

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

  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()
  const [activeMenuMobile, setActiveMenuMobile] = useState(false)
  const dispatch = useDispatch()
  const handleLogout = async () => {
    dispatch(removeUser())
    await signOut(auth)
    navigate('/login')
  }
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
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
        {
          user ?
            <div className='header__right__user'>
              <img src={userIcon} />
              <button className='btn btn-log-out' onClick={handleLogout}>Đăng xuất</button>
            </div>
            :
            <div className='header__right__button'>
              <Link to="/login">
                <button className='btn btn-sign-in'>Đăng nhập</button>
              </Link>
              <Link to='/signup'>
                <button className='btn btn-sign-up'>Đăng kí</button>
              </Link>
            </div>
        }
      </div>
    </header>
  )
}

export default Header