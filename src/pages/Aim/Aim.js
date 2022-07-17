import React, { useEffect, useRef, useState } from 'react';
import '../Dashboard/dashboard.scss'
import './aim.scss';
import { useDispatch, useSelector } from 'react-redux'
import { addAim as addAimRedux, removeAim } from '../../redux/reducers/userReducer';
import { useNavigate } from 'react-router-dom';
const School = [
    "Trường Đại học Bách Khoa Đà Nẵng",
    "Trường Đại học Ngoại Ngữ Đà Nẵng",
    "Trường Đại học Sư Phạm Đà Nẵng",
    "Trường Đại học Kinh Tế Đà Nẵng",
]
const Major = [
    "7480201 - Công nghệ thông tin", "7520114 - Kỹ thuật cơ - điện tử"
];
const Subs = [
    "A01: Toán - Lí- Anh", "A04 : Toán, Vật lí, Địa lí"
]

function Aim() {
    const aim = useSelector(state => state.user.aim)
    const [major, setMajor] = useState(["7480201 - Công nghệ thông tin", "7520114 - Kỹ thuật cơ - điện tử"]);
    const rSchool = useRef(null);
    const rMajor = useRef(null);
    const rSubs = useRef(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function addAim() {
        const tempAim = [{
            "SCHOOL": rSchool.current.value,
            "MAJOR": rMajor.current.value,
            "SUBS": rSubs.current.value,
        }]
        dispatch((addAimRedux([...aim, tempAim])))
    }
    function onSelectChange(e) {
        if (e.target.name == "school") {
            console.log(e.currentTarget.value)
            if (e.currentTarget.value == School[0]) {
                setMajor(["7480201 - Công nghệ thông tin", "7520114 - Kỹ thuật cơ - điện tử"]);
            } else if ((e.currentTarget.value).localeCompare(School[1]) == 0) {
                console.log(1)
                setMajor(["7140231 - Sư phạm tiếng Anh", "7140233 - Sư phạm tiếng Pháp"]);
            } else if (e.currentTarget.value == School[2]) {
                setMajor(["7140202- Giáo dục Tiểu học", "7140205 - Giáo dục Chính trị"]);
            } else if (e.currentTarget.value == School[2]) {
                setMajor(["7340101 - Quản trị kinh doanh", "7340115 - Marketing"]);
            }
        }
    }

    const handleRegisterAim = () => {
        dispatch(addAimRedux(aim))
        navigate('/dashboard')
    }

    const handleDeleteAim = (index) => {
        let aimCopy = [...aim]
        aimCopy = aimCopy.filter((el, indexEl) => indexEl !== index)
        dispatch(removeAim(aimCopy))
    }

    console.log(aim)

    return (
        <div className='aim__wrapper'>
            <div className='dashboard__background'>
                <div className='dashboard__content'>
                    <h2 className='dashboard__content__title'>MindEdu</h2>
                    <p className='dashboard__content__description'>
                        Thông tin đăng ký nguyện vọng
                    </p>
                </div>
            </div>
            <div className='aim__content mt-36'>
                <h3 className='aim__list'>DANH SÁCH NGUYỆN VỌNG ĐĂNG KÝ</h3>
                <table className='aim__table mt-24'>
                    <tr >
                        <th>Thứ  tự nguyện vọng</th>
                        <th>Tên trường</th>
                        <th>Tên ngành</th>
                        <th>Tổ hợp</th>
                        <th></th>
                    </tr>

                    {
                        aim.map((item, idx) => {
                            const t = item[0];
                            return (<tr key={idx}>
                                <td className='text-center'>{idx + 1}</td>
                                <td className='text-center'>{t.SCHOOL}</td>
                                <td className='text-center'>{t.MAJOR}</td>
                                <td className='text-center'>{t.SUBS}</td>
                                <td className='text-center'>
                                    <button className='btn-delete-aim' onClick={() => handleDeleteAim(idx)}>Xoá</button>
                                </td>
                            </tr>)
                        })}
                    <tr>
                        <td>
                            <p className='text-center'>
                                {aim.length + 1}
                            </p>
                        </td>
                        <td>
                            <select onChange={e => onSelectChange(e)} name='school' ref={rSchool} className="aimSelect text-center">Chọn trường
                                {School.map((item, idx) => {
                                    return (<option key={idx} value={item}>{item}</option>)
                                })}
                            </select>
                        </td>
                        <td>
                            <select name='major' ref={rMajor} className="aimSelect text-center">Chọn ngành
                                {major.map((item, idx) => {
                                    return (<option key={idx} >{item}</option>)
                                })}
                            </select>
                        </td>
                        <td>
                            <select ref={rSubs} className="aimSelect text-center">Chọn mã tổ hợp
                                {Subs.map((item, idx) => {
                                    return (<option key={idx} >{item}</option>)
                                })}
                            </select>
                        </td>
                        <td></td>
                    </tr>

                </table>
                <button className='btn-add' onClick={addAim}>Thêm nguyện vọng</button>
                <button className='btn-add' onClick={handleRegisterAim}>Đăng ký</button>
            </div>
        </div>

    );
}


export default Aim;