
import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            isLoggedIn: false
        }
    }
    handleOnChangeUsername = (event) => {
        this.setState({ username: event.target.value })
    }
    handleOnChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    handleLogin = () => {
        if (this.state.username === '' || this.state.password === '') {
          this.setState({ message: 'Vui lòng nhập đầy đủ thông tin' });
        } else {
          console.log('Đăng nhập thành công');
          console.log(`Username: ${this.state.username}`);
          console.log(`Password: ${this.state.password}`);
          this.setState({ isLoggedIn: true });
        }
      }

    
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className='login-content row'>
                        <div className='col-12 text-login'>   Login      </div>
                        <div className='col-12 form-group login-input'>
                            <label>Username: </label>
                            <input type='text' className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password: </label>
                            <div className='custom-input-password' >
                                <input className='form-control'
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password' value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => { this.handleShowPassword() }}>
                                    <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12 ' style={{ color: 'red ' }} >
                            {this.state.message}
                        </div>
                        <div className='col-12 ' >
                            <button className='btn-login' onClick={() => {
                                this.handleLogin() 
                            }}>Log in </button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'> Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-lg'> Or Log in with </span>
                        </div>
                        <div className='col-12 social-lgi'>
                            <i className="fab fa-google-plus-g  google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default (Login);