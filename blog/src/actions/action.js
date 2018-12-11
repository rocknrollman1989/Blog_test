import axios from 'axios'
import moment from 'moment'

export const fetchDataFromServer = () =>{
    return (dispatcher)=>{
       return axios.get('http://localhost:3001/db')
        .then((data)=>{
            // console.log(data)
            dispatcher({ 
                type: 'FETCH_DATA_FROM_SERVER',
                data
            })

        })
    }
}

export const addPostSendPost = (data) => {
    return (dispatcher)=>{
        let newData = { body: data.post,
                    title: data.namePost,
                    postDate: moment().format(' HH:mm    DD.MM.YYYY')
        }
        return axios.post('http://localhost:3001/posts', newData)
                .then((newData)=>{
                    dispatcher({type: 'SEND_DATA_TO_SERVER', newData})
                })
    }
}

export const deleteOurPostFromServer = (data) => {
    return (dispatcher) => {
        let deleteData = data
           return axios.delete(`http://localhost:3001/posts/${deleteData.id}`, deleteData)
          .then((data)=> {
            dispatcher({type: 'DELETE_POST_FROM_SERVER', data})
          })   
    }
}

export const addCommentSendPost = (data) => {
    return (dispatcher) => {
        let newCom = {body: data.body,
                    commentDate: moment().format(' HH:mm    DD.MM.YYYY'),
                    fromPostId: data.fromPostId }
        return axios.post('http://localhost:3001/comments', newCom)
        .then(() => {
            dispatcher({type: 'ADD_NEW_COMMENT',  data})
        })
    }
}
export const registerNewUser = (dataUser) => {
    return (dispatcher) => {
        return axios.get('http://localhost:3001/users')
            .then((users) => {
                let ressault = users.data.find((user)=>{
                    return  dataUser.nickName === user.nickName
                })
                    ressault ? 
                    dispatcher({type: 'USER_REGISTER_ERROR',  infoForUser: 'Такой Уже Есть Юзер'}):
                    axios.post('http://localhost:3001/users', dataUser)
                        .then(()=> dispatcher({type: 'USER_REGISTER_DONE',  infoForUser: ''}))
                }
            )
    }
}