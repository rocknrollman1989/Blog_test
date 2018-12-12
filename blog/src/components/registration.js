import React from 'react'
import { RegisterFormSC } from '../lib/componentSt'
import { connect } from 'react-redux'
import { registerNewUser } from '../actions/action'



class Registration extends React.Component{
        state = {
        nickName: '',
        subBTN: '',
        pass:  '',
        email: '',
        };
 
openRegisterForm = () => {
    this.setState({ openRegister: true})
}
closeRegistrationMenu = () => {
    this.setState({ openRegister: false})
}

onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name] : value });

}

onSubmit = (event) => {

event.preventDefault();
this.props.registerNewUser(this.state)

}

render(){

const { errorRegisterMessage, doneRegisterMessage } = this.props
    return(
        <RegisterFormSC>
        <button onClick={this.openRegisterForm} >Register me!</button>
            <div className='register-form' style={{display: this.state.openRegister? 'flex':'none'}} >
                <form onSubmit={this.onSubmit}>
                    <label>
                        Enter NickName
                        <input type="text" value={this.state.nickName} name='nickName' onChange={this.onChange} placeholder={"Nick"}/>
                    </label>
                    <label>
                        Enter Pass
                        <input type="password" value={this.state.pass} name='pass' onChange={this.onChange} placeholder={"password"} />
                    </label>
                    <label>
                        Enter e-mail
                        <input type="text" value={this.state.email} name='email' onChange={this.onChange} placeholder={"email" } />
                    </label>
                    {doneRegisterMessage? null :<button type='submit'>Register!</button>}
                    <span style={{color: 'red'}}>{errorRegisterMessage}</span>
                    <span style={{color: 'green'}}>{doneRegisterMessage}</span>
                </form>
                <button onClick={this.closeRegistrationMenu}>Close</button>
            </div>
        </RegisterFormSC>
        )
    }
}
const mapStateToProp = (state) => {
    
    return {
        errorRegisterMessage: state.errorRegisterMessage,
        doneRegisterMessage: state.doneRegisterMessage
    }
}

 const mapDispatchToProps = (dispatch) => {
    return{
        registerNewUser: (dataUser) => (dispatch(registerNewUser(dataUser)))
    }
 }


export default connect(mapStateToProp, mapDispatchToProps)(Registration)