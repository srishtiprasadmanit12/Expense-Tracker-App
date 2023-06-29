import React, { useReducer ,createContext} from 'react'
 
//AppReducer is incharge of creating new globla state object,based on action type & payload
//GLOBAL STATE OBJ(4)
const reducer=(state,action)=>{
    switch(action.type)
    {
        default:
            return state;
    }
}
//creating initial state (1)
const initialState={
    budget:3000,
    expenses:[
        {id:11,name:'Medecines',cost:500},
        {id:12,name:'Vacation',cost:900},
        {id:12,name:'maintenance',cost:300}
    ],
}
//All we've done is added a call to createContext  - thats our context object created!(2)
//it is done to enable communication b/w Provider & consumer components within the same componenent tree
export  const  AppContext= createContext("");

//Provider is a component which we want to pass the state to.We're using that in conjunction with 
//useReducer hook, which actually stores the global state.(3)
export const AppProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    return (
        <AppContext.Provider
         value={{
        budget:state.budget,
         expense:state.expenses,
         dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}
//Next step is to link our AppContext  our App Component(5)--> go to App Component