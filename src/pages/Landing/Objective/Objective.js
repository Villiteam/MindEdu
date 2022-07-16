import React from 'react';
import './objective.scss';

import studentImg from '../../../assets/images/objective/student.svg'
import teacherImg from '../../../assets/images/objective/teacher.svg'
import parentImg from '../../../assets/images/objective/parent.svg'

const Objective = () => {


    const objectives = [
        {
            name: 'Giáo viên',
            description: 'MindEdu cung cấp cho giáo viên công cụ giúp giảm tải công việc, tăng hiệu quả giảng dạy và hiểu năng lực học sinh nhanh chóng.'
        },
        {
            name: 'Học sinh',
            description: 'MindEdu cung cấp giao diện làm bài kiểm tra trực quan, thân thiện và dễ dàng sử dụng.'
        },
        {
            name: 'Phụ huynh',
            description: 'MindEdu giúp phụ huynh dễ dàng nắm bắt tình hình học tập của các con.'
        }
    ]

    const listImages = [
        {
            img: studentImg,
            name: 'Học sinh'
        },
        {
            img: teacherImg,
            name: 'Giáo viên'
        },
        {
            img: parentImg,
            name: 'Phụ huynh'
        }
    ]

    return (
        <div className='objective'>
            <div className='objective__container'>
                <div className='objective__img'>
                    {
                        listImages.map((item, index) => (
                            <div className='objective__img__item' key={index}>
                                <img src={item.img} />
                                <span>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
                <div className='objective__content'>
                    <h2 className='objective__content__title'>Đối tượng mà MindEdu hướng tới</h2>
                    <div className='objective__content__description'>
                        {
                            objectives.map((item, index) => (
                                <div key={index} className="objective__content__description__item">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Objective