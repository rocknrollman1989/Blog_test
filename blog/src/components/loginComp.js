import React from 'react'
import { LoginPopupSC } from '../lib/componentSt'
import { connect } from 'react-redux'
import { logInUser, logOutUser } from '../actions/action'

class LoginComp extends React.Component{
    state = {
        nickName: '',
        pass: '',
        loginFormIsOpen: false,
    }

    handleChange = (event) =>{
        const { name, value } = event.target
        this.setState({[name] : value})
    }
    loginFormOpen = () => {
        this.setState({loginFormIsOpen: true})
    }
    loginFormClose = () =>{
        this.setState({loginFormIsOpen: false})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.logInUser(this.state)
    }
    logOutUser = () => {
        this.props.logOutUser()
    }
    componentDidUpdate(prevProps){
        if(prevProps.isLogin !== this.props.isLogin){
            this.setState({loginFormIsOpen: false})
        }
    }
render(){

const { isLogin, errorUserNotFound, user } = this.props


    return(
            <LoginPopupSC>
                { isLogin ? null : <button onClick={this.loginFormOpen}>LOG IN</button>}
                { isLogin? <button onClick={this.logOutUser}>LOG OUT</button>: null }
                <h4>{user}</h4>
                <div className="login-form" style={{display: this.state.loginFormIsOpen?'flex':'none'}}>
                    <form onSubmit={this.onSubmit}>
                        <label>
                        Enter you nickName
                        <input type="text" value={this.state.nickName} name='nickName' onChange={this.handleChange} placeholder={'nickName'} />
                        </label>
                        <label>
                        Enter your Pass
                        <input type="password" value={this.state.pass} name='pass' onChange={this.handleChange} placeholder={'pass'} />
                        <button type='submit'>LOG IN</button>
                        <span style={{color: 'red', width: '180px'}}>{errorUserNotFound}</span>
                        <button onClick={this.loginFormClose}>Not today</button>
                        </label>
                    </form>
                </div>
            </LoginPopupSC>
        )
    }
}
const mapStateToProps = (state) =>{
   
    return{
        errorUserNotFound: state.errorUserNotFound,
        isLogin: state.isLogin,
        user:    state.user
    }
}
const mapDispachToProps = (dispatch) => {
    return{
        logInUser: (loginData) => {dispatch(logInUser(loginData))},
        logOutUser: () => {dispatch(logOutUser())}
    }
}


export default connect(mapStateToProps, mapDispachToProps)(LoginComp)