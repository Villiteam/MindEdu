import React from 'react';
import './prove.scss';

import proveImage from '../../../assets/images/prove/prove.jpg'
import checkIcon from '../../../assets/images/icons/check.svg'

import Form from '../Form/Form';

const Prove = () => {




    return (
        <div className='prove'>
            <div className='experience' style={{ backgroundImage: `url(${proveImage})` }}>
                <div className='experience__wrap'>
                    <h2>Trải nghiệm ngay Mindev</h2>
                    <div className='experience__description'>
                        <p>Ứng dụng giáo dục Mindev dành cho nhà trường:</p>
                        <p>LabHok đem đến giải pháp công nghệ giúp tối ưu thời gian, công sức của giáo viên trong việc giảng dạy, giao bài và theo dõi kết quả học tập của học sinh.</p>
                    </div>
                </div>
            </div>
            <div className='deals'>
                <div className='deals__wrap'>
                    <h2>Sau khi đăng ký dùng thử giáo viên có thể</h2>
                    <ul className='deals__menu'>
                        <li className='deals__menu__item'>
                            <img src={checkIcon} />
                            <p>Tạo đề trực tuyến với công nghệ nhận diện thông minh</p>
                        </li>
                        <li className='deals__menu__item'>
                            <img src={checkIcon} />
                            <p>Giảng dạy trực tuyến, tạo lớp học trực tuyến dễ dàng</p>
                        </li>
                        <li className='deals__menu__item'>
                            <img src={checkIcon} />
                            <p>Quản lý điểm số lớp học, cá nhân học sinh trực quan và thuận tiện</p>
                        </li>
                        <li className='deals__menu__item'>
                            <img src={checkIcon} />
                            <p>Sử dụng kho ngân hàng câu hỏi chất lượng cao được soạn bởi đội ngũ giảng viên trên toàn quốc</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='form-register' id='lien-he'>
                <Form />
            </div>
        </div>
    )
}

export default Prove