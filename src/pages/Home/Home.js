import React from 'react'
import './home.scss'


import botImage from '../../assets/images/icons/bot.png'
import examImage from '../../assets/images/icons/exam.png'
import orientationImage from '../../assets/images/icons/orientation.png'
import { Link } from 'react-router-dom'
const Home = () => {


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
            image: botImage,
            title: 'Trợ lý ảo',
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