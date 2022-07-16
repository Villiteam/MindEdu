import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../utils/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Login.scss';
import '../../styles/index.scss'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  
  return (
    <div className='login__wrapper'>
      <div className='login__container'>
        <div className='login__content'>
          <div className='login__form'>
            <div className='login__header' />
            <div>
              <input
                type="text"
                className="form-control input"
                value={email}
                placeholder="Địa chỉ email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control input"
                value={password}
                placeholder="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={() => logInWithEmailAndPassword(email, password)}
              className="btn-lg btn-primary mt-24 hover"
            >
              Đăng nhập
            </button>
            <p className="mt-12">Hoặc</p>
            <button className="btn-lg btn-primary customBtn mt-12 hover" onClick={signInWithGoogle}>
              Đăng nhập với Google
            </button>
          </div>
          <div className="text-center mt-36">
            Không có tài khoản?{' '}
            <Link className="highlight hover" to="/register">
              Đăng kí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;