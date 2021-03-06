import React, { useState, useEffect } from 'react'
import './dashboard.scss'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../utils/Firebase'
import { getTimeFirebase } from '../../utils/getTimeFirebase';

import backgroundImage from '../../assets/images/dashboard/background-dashboard.jpg'
import ContestCard from './ContestCard';
import Footer from '../../components/Footer/Footer'

const Dashboard = () => {
    const [upcoming, setUpcoming] = useState([])
    const [happening, setHappening] = useState([])
    const [happened, setHappened] = useState([])
    useEffect(() => {
        const getDataContests = async () => {
            try {
                let results = []
                const q = query(collection(db, 'Contest'), where('Status', '==', true))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    results.push({ ...doc.data(), id: doc.id })
                })
                if (results && results.length > 0) {
                    let upcomingTemp = []
                    let happenedTemp = []
                    let happeningTemp = []
                    results.forEach((item) => {
                        const startTime = getTimeFirebase(item.Start.seconds, item.Start.nanoseconds)
                        const endTime = getTimeFirebase(item.End.seconds, item.End.nanoseconds)
                        const timeNow = new Date().getTime()
                        if (startTime.timeFirebase > timeNow) {
                            upcomingTemp.push(item)
                        } else if (startTime.timeFirebase < timeNow && endTime.timeFirebase > timeNow) {
                            happeningTemp.push(item)
                        } else if (endTime.timeFirebase < timeNow) {
                            happenedTemp.push(item)
                        }
                    })
                    setUpcoming(upcomingTemp)
                    setHappening(happeningTemp)
                    setHappened(happenedTemp)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getDataContests()
    }, [])


    return (
        <div className='dashboard'>
            <div className='dashboard__background'>
                <div className='dashboard__content'>
                    <h2 className='dashboard__content__title'>MindEdu</h2>
                    <p className='dashboard__content__description'>
                        H??y nhanh tay ????ng k?? c??c cu???c thi b??n d?????i n??o !
                    </p>
                </div>
            </div>
            <div className='dashboard__contests'>
                <div className='dashboard__contests__item'>
                    <h2 className='dashboard__contests__title'>S???p di???n ra</h2>
                    {
                        upcoming && upcoming.length > 0 ?
                            upcoming.map((item, index) => (
                                <div key={index} className="dashboard__contests__item__menu">
                                    <ContestCard contest={item} />
                                </div>
                            ))
                            :
                            <div className='contest__empty'>
                                <span>Kh??ng c?? cu???c thi n??o</span>
                            </div>
                    }
                </div>
                <div className='dashboard__contests__item'>
                    <h2 className='dashboard__contests__title'>??ang di???n ra</h2>
                    {
                        happening && happening.length > 0 ?
                            happening.map((item, index) => (
                                <div key={index} className="dashboard__contests__item__menu">
                                    <ContestCard contest={item} />
                                </div>
                            ))
                            :
                            <div className='contest__empty'>
                                <span>Kh??ng c?? cu???c thi n??o</span>
                            </div>
                    }
                </div>
                <div className='dashboard__contests__item'>
                    <h2 className='dashboard__contests__title'>???? di???n ra</h2>
                    {
                        happened && happened.length > 0 ?
                            happened.map((item, index) => (
                                <div key={index} className="dashboard__contests__item__menu">
                                    <ContestCard contest={item} />
                                </div>
                            ))
                            :
                            <div className='contest__empty'>
                                <span>Kh??ng c?? cu???c thi n??o</span>
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Dashboard