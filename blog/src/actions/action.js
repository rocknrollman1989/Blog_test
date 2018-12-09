import axios from 'axios'

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
        dispatcher({type: 'SEND_DATA_TO_SERVER', data})
    }
           
}

export const deleteOurPostFromServer = (data) => {
    return {
        type: 'DELETE_POST_FROM_SERVER',
        data
    }
}

export const addCommentSendPost = (data) => {
    return {
        type: 'ADD_NEW_COMMENT',
        data
    }
}





