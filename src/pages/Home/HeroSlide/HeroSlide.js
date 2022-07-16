import React, { useState, useEffect } from 'react';
import './hero-slide.scss';

import banner1 from '../../../assets/images/banners/banner-home-1.jpg';
import banner2 from '../../../assets/images/banners/banner-home-2.jpg';
import banner3 from '../../../assets/images/banners/banner-home-3.jpg';
import banner4 from '../../../assets/images/banners/banner-home-4.jpg';

const HeroSlide = () => {

    const slideMenu = [
        {
            img: banner1,
            caption: 'Tạo đề trực tuyến thần tốc với công nghệ nhận diện câu hỏi và đáp án thông minh!',
            path: '/sign-up',
            buttonText: 'Trải nghiệm miễn phí'
        },
        {
            img: banner2,
            caption: 'Lớp học trực tuyến, giải pháp giáo dục mùa Covid!',
            path: '/sign-up',
            buttonText: 'Trải nghiệm miễn phí'
        },
        {
            img: banner3,
            caption: 'Quản lý điểm số lớp học, cá nhân học sinh trực quan và thuận tiện!',
            path: '/sign-up',
            buttonText: 'Trải nghiệm miễn phí'
        },
        {
            img: banner4,
            caption: 'Kho ngân hàng câu hỏi chất lượng cao, dễ dàng sử dụng ma trận câu hỏi để tạo đề kiểm tra!',
            path: '/sign-up',
            buttonText: 'Trải nghiệm miễn phí'
        }
    ]
    const dotControl = [
        {
            id: 0
        },
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ]

    const [indexActive, setIndexActive] = useState(0)

    useEffect(() => {

        const changeSlide = () => {
            setIndexActive(indexActive === 3 ? 0 : indexActive + 1)
        }
        setTimeout(changeSlide, 100000)

        return clearTimeout(changeSlide)
    }, [indexActive])

    return (
        <div className='hero-slide'>
            <ul className='hero-slide__menu'>
                {
                    slideMenu.map((item, index) => (
                        <li key={index} className={`hero-slide__menu__item ${indexActive === index ? 'active' : ''}`}>
                            <div className='img' style={{ backgroundImage: `url(${item.img})` }}>
                                <div className='hero-slide__menu__item__content'>
                                    <h2 className='caption'> {item.caption} </h2>
                                    <a className='explore' href={item.path}>{item.buttonText}</a>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <ul className='control-slide'>
                {
                    dotControl.map((item, index) => (
                        <li className={`dot ${indexActive === item.id ? 'active' : ''}`}
                            key={index}
                            onClick={() => setIndexActive(item.id)}
                        >

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HeroSlide