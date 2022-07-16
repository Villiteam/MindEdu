import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../utils/Firebase';
import { collection, addDoc } from "firebase/firestore";

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/reducers/userReducer';

import Input from '../../components/Input/Input.js';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('')
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const user = useSelector(state => state.user.user)

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])
  function ValidateForm() {
    let returnData = {
      error: false,
      msg: ''
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: 'Không đúng định dạng email'
      }
    }
    if (password.length < 8) {
      returnData = {
        error: true,
        msg: 'Mật khẩu phải lớn hơn 8 ký tự'
      }
    }
    return returnData;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(auth, email, password)
    if (user) {
      const { email } = user.user
      const res = await addDoc(collection(db, 'User'), { email, fullname, id: user.user.uid })
      if (res) {
        console.log(user.user)
        dispatch(addUser(user.user))
        navigate('/')
      }
    }

  }
  function handleChange(e) {
    if (e.target.name === 'email') {
      setEmail(e.value);
    } else if (e.target.name === 'password') {
      setPassword(e.value);
    }
  }

  console.log({
    email, password, fullname
  })

  return (
    <div className='login-form'>
      <form
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="text">Email:</label>
          <Input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Mật khẩu:</label>
          <Input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Họ và tên:</label>
          <Input
            type="text"
            className="form-control"
            name="fullname"
            placeholder="Enter fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <button className='btn-register'>Đăng ký</button>
      </form>
      <div className='text-center'>
        Đã có tài khoản? <Link to='/login'>Đăng nhập</Link>
      </div>
    </div>
  );
};
export default Register;