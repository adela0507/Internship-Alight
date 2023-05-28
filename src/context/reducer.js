import { CREATE_COS_BEGIN,CREATE_COS_ERROR,CREATE_COS_SUCCESS,HANDLE_CHANGE } from "./action";
import { initialState } from './appContext';

const reducer=(state,action)=>{
    if(action.type===CREATE_COS_BEGIN)
    {
        return {...state}
    }
    if(action.type===CREATE_COS_SUCCESS)
    {
    return{
        ...state
    }
    }
    if(action.type===CREATE_COS_ERROR)
    {
        return {...state}
    }
    if(action.type===HANDLE_CHANGE)
    {
        return{
            ...state,
            [action.payload.name]:action.payload.value,
        }
    }
}

export default reducer