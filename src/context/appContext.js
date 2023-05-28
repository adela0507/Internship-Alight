import React,{useReducer,useContext,useState, useEffect} from "react";
import reducer from "./reducer";
import axios from 'axios'
import { CREATE_COS_BEGIN,CREATE_COS_ERROR,CREATE_COS_SUCCESS,HANDLE_CHANGE } from "./action";

const initialState={
    name:'',
    username:'',
    address:'',
    mention:'',
    price:'',
    distance:'',

}

const AppContext= React.createContext();

const AppProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const carts=async()=>{
        dispatch({type:CREATE_COS_BEGIN})
   
    try {
        const{name,username,distance,address,price,mention}=state
        await axios.post('/api/v1/carts',{
            name,username,distance,address,price,mention
        })
        dispatch({type:CREATE_COS_SUCCESS})
    } catch (error) {
        dispatch({type:CREATE_COS_ERROR})
    }
}
const handleChange=({name,value})=>{
    dispatch({type:HANDLE_CHANGE,
        payload:{name,value},})
}
    return(
        <AppContext.Provider value={{...state,
        carts,handleChange
        }}>{children}</AppContext.Provider>
    );
}
const useAppContext=()=>{
    return useContext(AppContext);
}
export {initialState,useAppContext,AppProvider}