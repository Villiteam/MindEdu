import React, { useState, useEffect } from 'react'
import './contest.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/Firebase';
import _ from 'lodash'
import { getTimeFirebase } from '../../utils/getTimeFirebase';
import SubjectCard from './SubjectCard';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux'

const Contest = () => {

    const { id } = useParams()
    const [contest, setContest] = useState({})
    const [exams, setExams] = useState([])
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()

    useEffect(() => {
        const getContest = async () => {
            const docRef = doc(db, 'Contest', id)
            const docSnap = await getDoc(docRef)

            const data = docSnap.data()
            if (data) {
                data.Exams.forEach(async (item) => {
                    const res = await getDoc(item.Exam)
                    setExams([...exams, { ...res.data(), id: res.id }])
                })
            }
            setContest(data)

        }
        getContest()
    }, [id])

    const handleRegisterExam = () => {
        if (!user) {
            alert('Vui lòng đăng nhập!')
            navigate('/login')
        }
        navigate('/aim')
    }

    // console.log(exams)

    return (
        contest && !_.isEmpty(contest) &&
        <div className='contest'>
            <div className='contest__title'>
                <h2>Thông tin cuộc thi</h2>
                <p>{contest.Name}</p>
            </div>
            <div className='contest__content'>
                <div className='contest__content__time'>
                    <h4>Thời gian đăng ký:</h4>
                    <p>{getTimeFirebase(contest.Open.seconds, contest.Open.nanoseconds).timeFormat} - {getTimeFirebase(contest.Close.seconds, contest.Close.nanoseconds).timeFormat}</p>
                </div>
                <div className='contest__content__time'>
                    <h4>Thời gian làm bài thi:</h4>
                    <p>{getTimeFirebase(contest.Start.seconds, contest.Start.nanoseconds).timeFormat} - {getTimeFirebase(contest.End.seconds, contest.End.nanoseconds).timeFormat}</p>
                </div>
                <div className='contest__btn'>
                    <button onClick={handleRegisterExam}>Đăng ký</button>
                </div>
                <div className='contest__content__subject'>
                    <h3 className='contest__content__subject__title'>
                        Các môn thi bao gồm:
                    </h3>
                    <div className='contest__content__subject__menu'>
                        {
                            exams && exams.map((item, index) => (
                                <div key={index} className="contest__content__subject__item">
                                    <SubjectCard subject={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contest