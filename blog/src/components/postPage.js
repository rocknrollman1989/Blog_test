import React from 'react'
import { connect } from 'react-redux'
import {fetchDataFromServer, addPostSendPost} from '../actions/action'
import { PostPageSC } from '../lib/componentSt'
import PostIndivid from '../components/postIndiv'



class PostPage extends React.Component{
    constructor(){
        super()

        this.state = {
        namePost: '',
        post: '',
        isActive: 'form-close',

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
        this.setState({isActive: 'form-close'})

    }
    render(){

    const { posts, match, isLogin } = this.props
    const ourPosts = posts ?(posts.map((post)=>{
        return(
            <PostIndivid post={post} key={post.id} match={match}/>
        )}
    )):(<p>Loading...</p>)
      
    return(
        <PostPageSC>
            <h1>Hello, look at our posts!</h1>
            {isLogin ? <div className='create-post-wrapper'>
                {this.state.isActive === 'form-close'?
                <button onClick={this.handleClickOpen} className="btn-create-post">Create a new post!</button>: null }
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
            </div> : null }

            <div className="all-posts-wrapper">
                <div>{ourPosts}</div>
            </div>
        </PostPageSC>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
      posts: state.posts,
      isLogin: state.isLogin
    }
  }
const mapDispatchToProps = (dispatch) =>{
    return{
    fetchDataFromServer: ()=>{dispatch(fetchDataFromServer())},
    addPostSendPost: (data)=>{dispatch(addPostSendPost(data))}
      }
    }


export default connect(mapStateToProps, mapDispatchToProps)(PostPage)