import axios from 'axios'
import moment from 'moment'

const initialState = {
    comments : [],
    posts : []
}


const rootReduser = (state = initialState, action) => {
    // console.log(state, action)
    switch(action.type){
        case 'FETCH_DATA_FROM_SERVER':
            // console.log(action.data.data)
            return{
                ...state,
                comments: action.data.data.comments,
                posts: action.data.data.posts
            } 
        case 'SEND_DATA_TO_SERVER':
            // console.log(state.posts.slice(-1))
        let newIdForData = state.posts.slice(-1);
        let newData = { body: action.data.post,
                        title: action.data.namePost,
                        id: newIdForData.id + 1,
                        postDate: moment().format(' HH:mm    DD.MM.YYYY')
            }
            return{
                ...axios.post('http://localhost:3001/posts', newData),
                ...state,
                posts: [...state.posts, newData],
                // ...console.log(newData)
            }
        case 'DELETE_POST_FROM_SERVER':
            console.log(action.data)
            let deleteData = action.data

            return{
                ...axios.delete(`http://localhost:3001/posts/${deleteData.id}`, deleteData),
                ...state
            }
        case 'ADD_NEW_COMMENT':
            let newIdForComment = state.comments.slice(-1);
            // console.log(action.data, newIdForComment)
            let newCom = { body: action.data.body,
                        id: newIdForComment.id + 1,
                        commentDate: moment().format(' HH:mm    DD.MM.YYYY'),
                        fromPostId: action.data.fromPostId
            }
            return{
                ...axios.post('http://localhost:3001/comments', newCom),
                ...state,
                comments: [...state.comments, newCom],
                // ...console.log(newCom)
            }

    }
    
    return {
    ...state
    }
}

export default rootReduser