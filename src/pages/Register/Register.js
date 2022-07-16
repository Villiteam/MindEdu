import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../../utils/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../Login/Login.scss';
import '../../styles/index.scss';                    
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
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
              onClick={registerWithEmailAndPassword}
              className="btn-lg btn-primary mt-24 hover"
            >
              Đăng kí
            </button>
            <p className="mt-12">Hoặc</p>
            <button className="btn-lg btn-primary customBtn mt-12 hover" onClick={signInWithGoogle}>
              Đăng kí với Google
            </button>
          </div>
          <div className="text-center mt-24">
              Đã có tài khoản?{' '}
              <Link className="highlight hover" to="/login">
                Đăng nhập
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;