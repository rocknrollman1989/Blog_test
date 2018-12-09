import React from 'react'
import { connect } from 'react-redux'
import { Link }from 'react-router-dom'
import {fetchDataFromServer} from '../actions/action'
import { HomePageWrapperSC } from '../lib/componentSt'

class Home extends React.Component{

    componentWillMount(){
        this.props.fetchDataFromServer()
    }

render(){
   
    const{ comments, posts } = this.props
    
    const ourLastPosts = posts.length? (posts.slice(-3).map((post)=>{
    
        return(
        <Link to={`/Post/${post.id}`} key={post.id}>
            <div className='short-post' >
                <h3>{post.title}</h3>
                <p>{post.body.slice(0,150)+`...`}</p>
                <p style={{color: '#6495ed'}}>{post.postDate}</p>
            </div>
        </Link>
        )}
    )):(<p>Ничего нет, увы</p>)

    const ourLastComments = comments.slice(-3).map((comment)=>{
        return(
            <div className='short-comment' key={comment.id}>
                <Link to={`/Post/${comment.fromPostId}`}>
                    <p>{comment.body.slice(0,70)+`...`}</p>
                    <p>{comment.commentDate}</p>
                </Link>    
            </div>
        )
    })
    

    return(
    <HomePageWrapperSC>
        <h1>Welcome to Blog, perfect stranger!</h1>
        <div className='short-info-section'>
            <div className='post-wrapper'>
                <h4>Latest posts</h4>
                {ourLastPosts}
            </div>
            <div className='comments-wrapper'>
                <h4>Latest comments</h4>
                {ourLastComments}
            </div>
        </div>
    </HomePageWrapperSC> 
        )
    }

}
const mapStateToProps = (state) =>{
    return {
      comments: state.comments,
      posts: state.posts
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    return{
  
      fetchDataFromServer: ()=>{dispatch(fetchDataFromServer())
  
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
