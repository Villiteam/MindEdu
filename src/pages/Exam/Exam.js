import React, { useState } from 'react'
import './exam.scss'
import { useSelector } from 'react-redux'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useDispatch } from 'react-redux'
import { addExam, addScore } from '../../redux/reducers/examReducer'
import { useNavigate } from 'react-router-dom'

const Exam = () => {

    const examRedux = useSelector(state => state.exam.exam)
    const [questionActive, setQuestionActive] = useState(null)
    const [exams, setExams] = useState(examRedux)
    const [isDoing, setIsDoing] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleStartExam = () => {
        setIsDoing(true)
    }

    const handleSelectQuestion = (index) => {
        setQuestionActive(index)
    }

    const handleSelectAnswer = (index, indexQuestion) => {
        const examCopy = { ...exams }
        let questionSelect = examCopy.Data.Question[indexQuestion]
        questionSelect = { ...questionSelect, answerSelected: index }
        examCopy.Data.Question[indexQuestion] = questionSelect
        setExams(examCopy)
    }

    const handleFinshedExam = () => {

        let score = 0
        exams.Data.Question.forEach((el) => {
            if (el.answerSelected === el.answerTrue) {
                score += 0.5
            }
        })

        dispatch(addScore(score))
        dispatch(addExam(exams))
        navigate(`/statictis/${exams.id}`)
    }

    return (
        <div className='exam'>
            <div className='exam__btn'>
                <button onClick={handleStartExam}>Bắt đầu làm bài</button>
            </div>
            <div className='exam__timer'>
                <CountdownCircleTimer
                    isPlaying={isDoing}
                    duration={exams.Duration * 60}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    size={120}
                >
                    {({ remainingTime }) => {
                        const minutes = Math.floor(remainingTime / 60)
                        const seconds = remainingTime % 60

                        return `${minutes}:${seconds}`
                    }}
                </CountdownCircleTimer>
            </div>
            {
                isDoing &&
                <>
                    <div className='exam__assignment'>
                        <div className='exam__assignment__choice'>
                            {
                                exams && exams.Data.Question.map((item, index) => (
                                    <div className={`exam__assignment__choice__item ${item.answerSelected || item.answerSelected === 0 ? 'active' : ''}`}
                                        key={index}
                                    >
                                        <a href={`#${index}`} onClick={() => handleSelectQuestion(index)}> {index + 1}</a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='exam__assignment__questions'>
                            {
                                exams && exams.Data.Question.map((item, indexQuestion) => (
                                    <div
                                        id={indexQuestion}
                                        className={`exam__assignment__questions__item ${questionActive && questionActive === indexQuestion ? 'active' : ''}`}
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
                                                            onChange={() => handleSelectAnswer(index, indexQuestion)}
                                                            checked={exams.answerSelected ? exams.answerSelected === index : undefined}
                                                        />
                                                        <p>{`${answer.order}. ${answer.name}`}</p>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='exam__btn'>
                        <button onClick={handleFinshedExam}>Hoàn thành bài thi</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Exam