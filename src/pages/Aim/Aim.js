import React, { useEffect, useState } from 'react';


import './aim.scss';
function Aim() {
  return (
    <div className='aim__wrapper'>
      <div className='aim__header'>
        <h3>Thông tin đăng ký nguyện vọng</h3>
      </div>
      <div className='aim__content'>
        <h4 className='aim__list'>DANH SÁCH NGUYỆN VỌNG ĐĂNG KÝ</h4>
        <table border="1">
          <tr>
            <th colspan="3">Thứ  tự nguyện vọng</th>
            <th colspan="3">Mã trường</th>
            <th colspan="3">Tên trường</th>
            <th colspan="3">Mã ngành</th>
            <th colspan="3">Tên ngành</th>
            <th colspan="3">Tổ hợp</th>
          </tr>
          <tr>
            <td>Trần Anh Đức</td>
            <td>03/08/1993</td>
            <td>Nam</td>
          </tr>
        </table>
      </div>
    </div>
  );
}


export default Aim;