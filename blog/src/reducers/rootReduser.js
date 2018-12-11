
const initialState = {
    comments : [],
    posts : [],
    regResultMessage: "",
    user: {}
}


const rootReduser = (state = initialState, action) => {
    console.log(state, action)
    switch(action.type){
        case 'FETCH_DATA_FROM_SERVER':
            return{
                ...state,
                comments: action.data.data.comments,
                posts: action.data.data.posts
            } 
        case 'SEND_DATA_TO_SERVER':
            return{
                ...state,
                posts: [...state.posts, action.newData.data],
            }
        case 'DELETE_POST_FROM_SERVER':
            return{
                ...state
            }
        case 'ADD_NEW_COMMENT':
            return{
                ...state,
                comments: [...state.comments, action.newCom.data],
            }
        case 'USER_REGISTER_ERROR':
            return{
                ...state,
                regResultMessage: action.regResultMessage
            }
        case 'USER_REGISTER_DONE':
            return{
                ... state,
                regResultMessage: action.regResultMessage
            }
            default:
    }

    return {
    ...state
    }
}

export default rootReduser