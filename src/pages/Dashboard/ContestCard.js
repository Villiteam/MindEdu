import React from 'react'
import './contest.scss'
import _ from 'lodash'
import { getTimeFirebase } from '../../utils/getTimeFirebase'
import { Link } from 'react-router-dom'

const Contest = (props) => {
    const contest = props.contest

    return (
        contest && !_.isEmpty(contest) &&
        <Link to={`/contest/${contest.id}`}>
            <div className='contest'>
                <h2 className='contest__name'>{contest.Name}</h2>
                <div className='contest__time'>
                    <h4>Thời gian đăng ký</h4>
                    <p>{getTimeFirebase(contest.Open.seconds, contest.Open.nanoseconds).timeFormat} -  {getTimeFirebase(contest.Close.seconds, contest.Close.nanoseconds).timeFormat}</p>
                </div>
                <div className='contest__time'>
                    <h4>Thời gian mở bài thi</h4>
                    <p>{getTimeFirebase(contest.Start.seconds, contest.Start.nanoseconds).timeFormat} -  {getTimeFirebase(contest.End.seconds, contest.End.nanoseconds).timeFormat}</p>
                </div>
                <div className='contest__subject'>
                    <h4>Số môn thi: <span>{contest.Exams.length}</span></h4>
                </div>
                <div className='contest__fee'>
                    <h4>Lệ phí: <span>{contest.Price === 0 ? 'Miễn phí' : contest.Price}</span></h4>
                </div>
            </div>
        </Link>
    )
}

export default Contest