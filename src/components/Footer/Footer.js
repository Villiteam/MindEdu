import React from 'react';
import './footer.scss';

import fabookIcon from '../../assets/images/icons/fabook.svg'
import instagramIcon from '../../assets/images/icons/instagram.svg'
import linkedInIcon from '../../assets/images/icons/linkedin.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='footer__top__logo'>
                    <span>Mindev</span>
                </div>
                <div className='footer__top__contact'>
                    <div className='footer__top__contact__item'>
                        <h4>Địa chỉ:</h4>
                        <p>
                            Tầng 13, Keangnam Hanoi Landmark Tower, Khu E6, Khu đô thị mới Cầu Giấy, Phường Mễ Trì, Quận Nam Từ Liêm, Thành Phố Hà Nội, Việt Nam.
                        </p>
                    </div>
                    <div className='footer__top__contact__item'>
                        <h4>Email:</h4>
                        <p>
                            support@mindev.com
                        </p>
                    </div>
                    <div className='footer__top__contact__item'>
                        <h4>Hotline:</h4>
                        <p>
                            0123.456.789
                        </p>
                    </div>
                </div>
                <div className='footer__top__social'>
                    <p>Kết nối với chúng tôi</p>
                    <div className='footer__top__social__icons'>
                        <a href='https://fabook.com'>
                            <img src={fabookIcon} alt='fabook' />
                        </a>
                        <a href='https://instagram.com'>
                            <img src={instagramIcon} alt='instagram' />
                        </a>
                        <a href='https://linkedin.com'>
                            <img src={linkedInIcon} alt='linkedin' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer__down'>
                <div className='footer__down__copyright'>
                    <span>@2020 Labhok.com. All right reserved.</span>
                </div>
                <div className='footer__down__about-us'>
                    <a href='#'>
                        Về chúng tôi
                    </a>
                    <a href='#'>
                        Chính sách bảo mật
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer