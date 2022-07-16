import React from 'react'
import './home.scss'


import orientationImage from '../../assets/images/icons/orientation.png'
import examImage from '../../assets/images/icons/exam.png'
import conversationImage from '../../assets/images/icons/conversation.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {

    console.log(useSelector(state => state.user.user))
    const homeData = [
        {
            image: orientationImage,
            title: 'Khảo sát định hướng nghệ nghiệp',
            path: 'https://www.traitify.com/'
        },
        {
            image: examImage,
            title: 'Thi thử THPT',
            path: '/landing'
        },
        {
            image: conversationImage,
            title: 'Diễn đàn giao lưu học tập',
            path: '#'
        }
    ]

    return (
        <div className='home'>
            <div className='home__logo'>
                <h2>MindEdu</h2>
            </div>
            <div className='home__menu'>
                {
                    homeData.map((item, index) => (
                        <Link to={item.path} className='home__menu__item' key={index}>
                            <img src={item.image} />
                            <p>{item.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home