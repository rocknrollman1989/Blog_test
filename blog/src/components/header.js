import React from 'react'
import { HeaderSC } from '../lib/componentSt'
import { Link }from 'react-router-dom'

const Header = () =>{

return(
    <HeaderSC>
        <h1>Welcome to Blog!:)</h1>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Posts'>Posts</Link>
        </div>
    </HeaderSC>
    
    )
}

export default Header