import React, { useState } from 'react'
import * as AuthApis from '../../../api/authapi'
import { useNavigate } from 'react-router-dom';
import Masterinput from '../../inputfield/minput';
import { useAuth } from '../../../context/authContext'
import './login.css'


function Login() {
    const navigate = useNavigate();

    const { setAuthToken } = useAuth();

    const [input, setInput] = useState({
        email: '',
        password: ''
    });


    const handleInputChange = (e) => {
        const nameVal = e.target.name;

        if (nameVal === 'email') {
            setInput({
                ...input,
                email: e.target.value
            })
        }
        if (nameVal === 'password') {
            setInput({
                ...input,
                password: e.target.value
            })
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        AuthApis.LoginHandler({ email: input.email, password: input.password }).then(res => { setAuthToken(res?.data?.encodedToken) })
        navigate('/')
    }


    return (
        <div className='main-Container'>
            <div className='login-container'>
                <form onSubmit={handleSubmit} className='login-form'>


                    <div className='parts'>
                        <label className='email-label' htmlFor='emailName'>Email
                        </label>
                        <Masterinput className='email-input' type='email' name='email' onChange={handleInputChange} placeholder='type email' />

                    </div>


                    <div className='parts'>
                        <label className='pwd-label' htmlFor='password'>Password
                        </label>
                        <Masterinput className='password-input' type='password' name='password' onChange={handleInputChange} placeholder='type password' />

                    </div>
                    <div className='parts'>
                        <button className='log-btn' type='submit'>Login</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login


