
const initialState = {
    comments : [],
    posts : [],
    errorRegisterMessage: null,
    doneRegisterMessage: '',
    user: null,
    isLogin: false,
    errorUserNotFound: '',

}


const rootReduser = (state = initialState, action) => {
    // console.log(state, action)
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
                comments: [...state.comments, action.data],
            }
        case 'USER_REGISTER_ERROR':
            return{
                ...state,
                errorRegisterMessage: action.errorRegisterMessage,
            }
        case 'USER_REGISTER_DONE':
            return{
                ...state, 
                errorRegisterMessage: null,
                doneRegisterMessage: action.doneRegisterMessage
            }
        case 'USER_NOT_FOUND':
            return{
                ...state,
                errorUserNotFound: 'Ошибка в логине/пароле. А возможно что Вы не залогинены'
            }
        case 'USER_LOG_IN':
            return{
                ...state,
                errorUserNotFound: '',
                isLogin: true,
                user: action.loginData.nickName
            }
        case 'LOG_OUT_THIS_USER':
        return{
            ...state,
            isLogin: false,
            user: null
            }

        default:
        return  state
    }
}

export default rootReduser