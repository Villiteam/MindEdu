import React from 'react'
import './subject.scss'
import _ from 'lodash'
import { getTimeFirebase } from '../../utils/getTimeFirebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addExam } from '../../redux/reducers/examReducer'
import { useSelector } from 'react-redux'

const SubjectCard = ({ subject }) => {

    const naviagte = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const aim = useSelector(state => state.user.aim)

    const handleStartDoExam = () => {
        if (!user) {
            console.log(user)
            alert("Vui lòng đăng nhập!")
            naviagte('/login')
            return
        }

        if (!aim) {
            naviagte('/aim')
            return
        }
        dispatch(addExam(subject))

        naviagte(`/exam/${subject.id}`)

    }

    return (
        subject && !_.isEmpty(subject) &&
        <div className='subject'>
            <div className='subject__content'>
                <h2 className='subject__content__name'>{subject.Name}</h2>
                <p className='subject__content__duration'>{`Thời gian: ${subject.Duration} phút`}</p>
                <div className='subject__content__time'>
                    <h4>Thời gian bắt đầu làm bài:</h4>
                    <p>
                        {getTimeFirebase(subject.Open.seconds, subject.Open.nanoseconds).timeFormat} -  {getTimeFirebase(subject.Close.seconds, subject.Close.nanoseconds).timeFormat}
                    </p>
                </div>
            </div>
            <div className='subject__btn'>
                <button onClick={handleStartDoExam}>Làm bài thi</button>
            </div>
        </div>
    )
}

export default SubjectCard