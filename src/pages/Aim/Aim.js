import React, { useEffect, useState } from 'react';
import '../Dashboard/dashboard.scss'
import '../../styles/index.scss'
import './aim.scss';
const School = [
  "Trường Đại học Bách Khoa Đà Nẵng",
  "Trường Đại học Ngoại Ngữ Đà Nẵng",
  "Trường Đại học Sư Phạm Đà Nẵng",
  "Trường Đại học Kinh Tế Đà Nẵng",
]
const SchoolCode = [
  "DDK", "DDF", "DDS", "DUE"
];
const Major = [
    "Công nghệ thông tin", "Kỹ thuật cơ - điện tử"
  ];
const MajorCode = [
  "7480201",
    "7520114"
  ];
  const Subs = [
    "A01","A00","C03"
  ]
  const SubsName = [
    "Toán - Lí- Anh",
    "Toán - Lí- Hoá",
    "Sử - Địa - GDCD"
  ]
function Aim() {
  const [aim,setAim] = useState([])
  function addAim() {
    
  }
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
         <thead>
         <tr >
            <th colspan="3">Thứ  tự nguyện vọng</th>
            <th colspan="3">Mã trường</th>
            <th colspan="3">Tên trường</th>
            <th colspan="3">Mã ngành</th>
            <th colspan="3">Tên ngành</th>
            <th colspan="3">Tổ hợp</th>
            <th colspan="3">Tên tổ hợp</th>
          </tr>
         </thead>
         <tbody>
          <tr>
            <td> <select class="aimSelect">Chọn trường
            {School.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {SchoolCode.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {Major.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {MajorCode.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {Subs.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <td></td><select class="aimSelect">Chọn trường
            {SubsName.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select></td>
          </tr>
         </tbody>
        </table>
        <button className='btn-add'>Thêm nguyện vọng</button>
        <div class="aim__select">
          <select class="aimSelect">Chọn trường
            {School.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {SchoolCode.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {Major.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {MajorCode.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {Subs.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
          <select class="aimSelect">Chọn trường
            {SubsName.map((item,idx)=>{
              return (<option>{item}</option>)
            })}
          </select>
        </div>
      </div>
    </div>
    
  );
}


export default Aim;