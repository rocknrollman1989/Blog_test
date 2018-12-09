import React from 'react'
import { Link }from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchDataFromServer, addPostSendPost} from '../actions/action'
import { PostPageSC } from '../lib/componentSt'



class PostPage extends React.Component{
    constructor(){
        super()

        this.state = {
        namePost: '',
        post: '',
        isActive: 'form-close'
    }
}
    componentWillMount(){
        this.props.fetchDataFromServer() 
    }    

    handleClickOpen=(event)=>{
       this.setState({isActive: 'form-open'})
    }
    handleClickClose=()=>{
        this.setState({isActive: 'form-close'})
    }
    updateFieldValue = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    onSubmit=(event)=>{
    event.preventDefault()
    this.props.addPostSendPost(this.state)
    
    }
render(){
    
    const { posts } = this.props
    // console.log(this.props)
    const ourLastPosts = posts.length>0?(posts.map((post)=>{
        return(
            <div className='short-post' key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body.slice(0,200) + `...`}</p>
                <p style={{color: '#6495ed'}}>{post.postDate}</p>
                <Link to={`/Post/${post.id}`}><button>read more!</button></Link>
            </div>
            
        )}
    )):(<p>There is no posts at all</p>)// закончить!!!
      
    

    return(
        <PostPageSC>
            <h1>Hello, look at our posts!</h1>
            <div className='create-post-wrapper'>
                <button onClick={this.handleClickOpen} className="btn-create-post">Create a new post!</button>
                <form onSubmit={this.onSubmit} id="post-form" className={this.state.isActive}>
                    <label>
                    Name of the post:
                    <input type="text" value={this.state.name} name='namePost' onChange={this.updateFieldValue}
                        placeholder={'Name of the post'} />
                    </label>
                    <label>
                    About what???
                    <input type="text" value={this.state.email} name='post' onChange={this.updateFieldValue}
                        placeholder={'About what???'} />
                    </label>
                    <input type="submit" value="Create a new Post!!" className="btn-create-post" />
                <div onClick={this.handleClickClose} style={{textAlign: 'center'}}className="btn-create-post">Not today:(</div>
                </form>
            </div>

            <div className="all-posts-wrapper">
                <div>{ourLastPosts}</div>
            </div>
        </PostPageSC>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
      posts: state.posts
    }
  }
const mapDispatchToProps = (dispatch) =>{
    return{
    fetchDataFromServer: ()=>{dispatch(fetchDataFromServer())},
    addPostSendPost: (data)=>{dispatch(addPostSendPost(data))}
      }
    }


export default connect(mapStateToProps, mapDispatchToProps)(PostPage)