import React from 'react'
import { HeaderSC } from '../lib/componentSt'
import { Link }from 'react-router-dom'
import Registration from './registration'
import LoginComp from './loginComp'

const Header = ({isLogin}) =>{

return(
    <HeaderSC>
        <h1>Welcome to Blog!:)</h1>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Posts'>Posts</Link>
            { isLogin ? null : <Registration/>}
            <LoginComp/>
        </div>
    </HeaderSC>
    
    )
}

export default Header