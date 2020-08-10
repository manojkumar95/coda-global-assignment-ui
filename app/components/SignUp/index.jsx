import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useForm } from 'react-hook-form'
import classNames from 'classnames';

import { signUp } from '../../actions/login'

import 'styles/SignUp.scss';
import Logo from 'images/logo.png'

const SignUp = () => {
  const dispatch = useDispatch()

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = useCallback((formData) => {
    console.log('formDta', formData)
    if (!formData.isAdmin) {
      formData.isAdmin = false;
    }
    dispatch(signUp(formData))
  }, [dispatch])

  return (
    <div className="signup-container">
      <div className="signup-section">
        <div>
          <div className="heading">
            <div className="text-center">
              <img src={Logo} alt="Codaglobal"></img>

            </div>
            <div className="heading-text">
              <div className="signup-text">Sign up to CODA GLOBAL</div>
              <div className="login-section mt10">
                <span className="login-text">Already have an account?</span>
                <span className="pl-1">
                  <Link className="login-link" to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
          <form name="signupForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="input-section">
                <input
                  className={classNames('input-text', { 'error-border': errors.name })}
                  type='text'
                  name="name"
                  placeholder="Name"
                  ref={register({ required: true, minLength: 2, maxLength: 100 })}
                />
                {(errors.name && errors.name.type === 'required') && <span className="error-message">Please enter your first name</span>}
                {(errors.name && (errors.name.type === 'minLength' || errors.name.type === 'maxLength')) && <span className="error-message">Please enter a valid first name</span>}
              </div>

              <div className="input-section">
                <input
                  className={classNames('input-text', { 'error-border': errors.passCode })}
                  type='password'
                  name="passCode"
                  placeholder="Password"
                  ref={register({ required: true, minLength: 4, maxLength: 20 })}
                />
                {(errors.passCode && errors.passCode.type === 'required') && <span className="error-message">Please enter your passCode</span>}
                {(errors.passCode && (errors.passCode.type === 'minLength' || errors.passCode.type === 'maxLength')) && <span className="error-message">Please enter a valid passCode</span>}
              </div>
            </div>
            <div className="input-section">
              <input type="checkbox" name="isAdmin" ref={register()} />
              <span className="ml-2">isAdmin</span>
            </div>
            <div className="btn-section">
              <button className="signup-btn" type="submit">
                SIGN UP
                        </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}

export default SignUp