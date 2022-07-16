import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input.js';
import './login.scss';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/Firebase'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/reducers/userReducer.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    const user = await signInWithEmailAndPassword(auth, email, password)
    if (user) {
      console.log(user.user)
      dispatch(addUser(user.user))
      navigate('/')
    }
  }

  return (
    <div className='login-form'>
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group">
          <label htmlFor="text">Email:</label>
          <Input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className='btn-login'>Đăng nhập</button>
      </form>
      <div className='text-center'>
        Không có tài khoản? <Link to='/register'>Đăng kí</Link>
      </div>
    </div>
  );
};

export default Login;