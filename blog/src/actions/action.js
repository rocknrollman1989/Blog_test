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
        let newCom = { body: data.body,
                    commentDate: moment().format(' HH:mm    DD.MM.YYYY'),
                    fromPostId: data.fromPostId }
        return axios.post('http://localhost:3001/comments', newCom)
        .then(() => {
            dispatcher({type: 'ADD_NEW_COMMENT',  data})
        })
    }
}