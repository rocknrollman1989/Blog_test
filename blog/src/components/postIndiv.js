import React from 'react'
import { Link }from 'react-router-dom'

class PostIndivid extends React.Component{

render(){

    const { post } = this.props
        return(
            <div className='short-post' key={post.id}>
                <h3>{post.title}</h3>
                { this.props.match.path='/Posts' ? <p>{post.body.slice(0,200) + `...`}</p>:<p>{post.body}</p>}
                <p style={{color: '#6495ed'}}>{post.postDate}</p>
                <Link to={`/Post/${post.id}`}><button>read more!</button></Link>
            </div>
        )
    }
}

export default PostIndivid