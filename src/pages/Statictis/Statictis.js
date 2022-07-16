import React, { useEffect, useState } from 'react'

import './statictis.scss'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Statictis = () => {

    const exams = useSelector(state => state.exam.exam)
    const score = useSelector(state => state.exam.score)

    const [answerTrues, setAnswerTrues] = useState([])
    const [answerFalses, setAnswerFalses] = useState([])
    const { id } = useParams()


    useEffect(() => {
        let arrTrue = []
        let arrFalse = []
        exams.Data.Question.forEach((element, index) => {
            if (element.answerTrue === element.answerSelected) {
                if (element.level === 0) {

                }
                arrTrue.push({ ...element, index })
            } else {
                arrFalse.push({ ...element, index })
            }
        });
        setAnswerTrues(arrTrue)
        setAnswerFalses(arrFalse)
        window.scrollTo(0, 0)
    }, [id])

    return (
        <div className='statictis'>
            <div className='statictis__title'>
                <p>Kết quả kiểm tra</p>
            </div>
            <div className='statictis__score'>
                <p>Điểm số</p>
                <span>{`${score}/10`}</span>
            </div>
            <div className='statictis__results'>
                <div className='statictis__results__left'>
                    <h3>{`Số câu đúng: ${answerTrues.length ? answerTrues.length : null}`}</h3>
                    <p> Thứ tự câu đúng là: </p>
                    <div>
                        {answerTrues.map((el, index) => (
                            <span key={index}>
                                {index + 1 === answerTrues.length ? `${el.index}` : `${el.index}, `}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='statictis__results__right'>
                    <h3>{`Số câu sai: ${answerFalses.length ? answerFalses.length : null}`}</h3>
                    <p>Thứ tự câu sai là: {answerFalses.map((el, index) => `${index + 1 === answerFalses.length ? `${el.index}` : `${el.index}, `}`)}</p>
                </div>
            </div>
            <div className='statictis__results-detail'>
                <h2>Đáp án</h2>
                <div className='statictis__results-detail_menu'>
                    {
                        exams && exams.Data.Question.map((item, indexQuestion) => (
                            <div
                                id={indexQuestion}
                                className={`statictis__results-detail__item`}
                                key={indexQuestion}
                            >
                                <h4 className='question'>{`Câu ${indexQuestion + 1}: ${item.question}`}</h4>
                                <div className='answers'>
                                    {
                                        item.answer.map((answer, index) => (
                                            <div className='answers__item' key={index}>
                                                <input
                                                    name={`${indexQuestion}`}
                                                    type="radio"
                                                    checked={item.answerSelected === index}
                                                />
                                                <p>{`${answer.order}. ${answer.name}`}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p className={`answers__true ${item.answerSelected === item.answerTrue ? 'true' : 'false'}`}>
                                    {`Đáp án: ${item.answer[item.answerTrue].order}`}
                                </p>
                                <p className='solution'>
                                    {item.solution}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='statictis__btn'>
                <Link to="/dashboard">
                    <button>Đăng ký kì thi khác</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Statictis