import axios from 'axios'
import moment from 'moment'

export const fetchDataFromServer = () =>{
    return (dispatch)=>{
       return axios.get('http://localhost:3001/db')
        .then((data)=>{
            // console.log(data)
            dispatch({ 
                type: 'FETCH_DATA_FROM_SERVER',
                data
            })

        })
    }
}

export const addPostSendPost = (data) => {
    return (dispatch)=>{
        let newData = { body: data.post,
                    title: data.namePost,
                    postDate: moment().format(' HH:mm    DD.MM.YYYY')
        }
        return axios.post('http://localhost:3001/posts', newData)
                .then((newData)=>{
                    dispatch({type: 'SEND_DATA_TO_SERVER', newData})
                })
    }
}

export const deleteOurPostFromServer = (data) => {
    return (dispatch) => {
        let deleteData = data
           return axios.delete(`http://localhost:3001/posts/${deleteData.id}`, deleteData)
          .then((data)=> {
            dispatch({type: 'DELETE_POST_FROM_SERVER', data})
          })   
    }
}

export const addCommentSendPost = (data) => {
    return (dispatch) => {
        let newCom = {body: data.body,
                    commentDate: moment().format(' HH:mm    DD.MM.YYYY'),
                    fromPostId: data.fromPostId }
        return axios.post('http://localhost:3001/comments', newCom)
        .then(() => {
            dispatch({type: 'ADD_NEW_COMMENT',  data})
        })
    }
}
export const registerNewUser = (dataUser) => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/users')
            .then((users) => {
                let existedUser = users.data.find((user)=>{
                    return  dataUser.nickName === user.nickName
                })
                    existedUser ? 
                    dispatch({type: 'USER_REGISTER_ERROR',  errorRegisterMessage: 'Такой Уже Есть Юзер'}):
                    axios.post('http://localhost:3001/users', dataUser)
                        .then(()=> dispatch({type: 'USER_REGISTER_DONE',  doneRegisterMessage: 'Спасибо за регистрацию'}))
                }
            )
    }
}