import React, { useCallback } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { useForm } from 'react-hook-form'
import classNames from 'classnames';

import { login } from '../../actions/login'

import 'styles/Login.scss';
import Logo from 'images/logo.png'

const Login = () => {
    const dispatch = useDispatch()

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = useCallback((formData) => {
        dispatch(login(formData))
    }, [dispatch])

    return (
        <div className="login-container">
            <div className="login-section">
                <div className="login-content">
                    <div className="heading">
                        <div className="text-center">
                            <img src={Logo} alt="codaglobal"></img>
                        </div>
                        <div className="heading-text">
                            <div className="login-text">Log into CODA GLOBAL</div>
                            <div className="signup-section">
                                <span className="signup-text">Don't have an account?</span>
                                <span className="pl-1">
                                    <Link className="signup-link" to="/signup">Sign Up</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-section">
                            <input
                                className="input-text"
                                className={classNames('input-text', { 'error-border': errors.name })}

                                type='text'
                                name="name"
                                placeholder="Username"
                                ref={register({
                                    required: true
                                })}
                            />
                            {(errors.name && errors.name.type === 'required') && <span className="error-message">Please enter your name</span>}
                        </div>
                        <div className="input-section">
                            <input
                                className="input-text"
                                className={classNames('input-text', { 'error-border': errors.passCode })}

                                type='password'
                                name="passCode"
                                placeholder="Passcode"
                                ref={register({ required: true, minLength: 2, maxLength: 20 })}
                            />
                            {(errors.passCode && errors.passCode.type === 'required') && <span className="error-message">Please enter your passCode</span>}
                            {(errors.passCode && (errors.passCode.type === 'minLength' || errors.passCode.type === 'maxLength')) && <span className="error-message">Please enter a valid passCode</span>}
                        </div>
                        <div className="btn-section">
                            <button className="login-btn" type="submit">
                                LOG IN
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login