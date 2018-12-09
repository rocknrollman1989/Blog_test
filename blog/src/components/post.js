import React from 'react'
import { connect } from 'react-redux'
import { fetchDataFromServer, deleteOurPostFromServer, addCommentSendPost } from '../actions/action'
import { Redirect } from 'react-router-dom'
import {PostWrapperSC} from '../lib/componentSt'


class Post extends React.Component{
    constructor(){
        super()
        this.state = {
        deletePost: false,
        nameComment: ''

        }
    }
    componentDidMount(){
        this.props.fetchDataFromServer() 
    }
    deleteOurPost = () => {
        
        this.props.deleteOurPostFromServer(this.props.post);
        this.setState({deletePost : true});
        
    }
    updateFieldValue = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    resaveOurPost = () => {

    }

    onSubmit=(event)=>{
        event.preventDefault()
       
        let ourCommentData = {
            body: this.state.nameComment,
            fromPostId: this.props.post.id
        }
        // console.log(ourCommentData)

        this.props.addCommentSendPost(ourCommentData)
        
        }

render(){
    if(this.state.deletePost === true){
       return <Redirect  to='/Posts' push/>
    }
   
    const { post, comment } = this.props
    

    const ourPost = post ? (
        <div className="single-post">
            
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p style={{color: '#6495ed'}}>{post.postDate}</p>
            {/* <button onClick={this.resaveOurPost}>Редактировать пост</button> add input for change */}

            <button onClick={this.deleteOurPost}>Удалить пост</button>
        </div>
    ):(
        <p>Он ушел... но обещал вернуться...</p>
    ) 
    
    const ourComments = comment ? (comment.map((comment)=>{
        // console.log(comment)
        return(
            <div className='single-comment' key={comment.id}>
                
                <p>{comment.body}</p>
                <p style={{color: '#6495ed'}}>{comment.commentDate}</p>
            </div>
        )
       
    })):
    (<p> Еще никто не наследил тут... Можете быть первыми!:)</p>)


        return(
            <PostWrapperSC>
                {ourPost}
                <h3>Anonim coments:)</h3>
                {ourComments}
                <form onSubmit={this.onSubmit} className="comment-form">
                    <label>
                    <input type="text" value={this.state.name} name='nameComment' onChange={this.updateFieldValue}
                        placeholder={'comment'} />
                    </label>
                <input type="submit" value="Create a new comment!!" className="btn-create-post" />
                </form>
            </PostWrapperSC>
        )
    }

}

const mapStateToProps = (state, ownProps) =>{
    let idPostToShow = ownProps.match.params.Post_Number
    let idCommentToShow = ownProps.match.params.Post_Number
    
    return {
      comment: state.comments.filter(comment => comment.fromPostId === Number(idCommentToShow)),
      post: state.posts.find(post => post.id === Number(idPostToShow))
    }
  }
const mapDispatchToProps = (dispatch) =>{
    return{

    fetchDataFromServer: ()=>{dispatch(fetchDataFromServer())},
    deleteOurPostFromServer: (data) => {dispatch(deleteOurPostFromServer(data))},
    addCommentSendPost: (data) => {dispatch(addCommentSendPost(data))}
  
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

