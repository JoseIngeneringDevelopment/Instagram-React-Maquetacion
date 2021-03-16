import axios from 'axios';

const add_Post_Started = () => {
    return ({
        type: "ADD_STARTED"
    });
}

const add_Post_Success = () => {
    return ({
        type: "ADD_SUCCESS"
    });
}

const add_Post_Error = () => {
    return ({
        type: "ADD_ERROR"
    });
}

export const addPostThunk = (input, history) => {
    return (dispatch) => {
        dispatch(add_Post_Started());
        var obj = {
            caption : input.caption,
            image_url: input.url,
            comments: [],
            likes: 0,
            time: Date.now()
        }
        axios.post("https://604be3ddee7cb900176a2b10.mockapi.io/posts",obj).then((response) => {
            console.log(response.data);
            dispatch(add_Post_Success());  
            history.push("/")          
        }).catch((error) => {
            console.log('error: ', error);
            dispatch(add_Post_Error());            
        })
    }
}