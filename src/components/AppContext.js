import React from 'react'

const initialState={
    budget:2000,
    expenses:[
        {id:11,name:'Medecines',cost:500},
        {id:12,name:'Vacation',cost:900},
        {id:12,name:'maintenance',cost:300}
    ]
}
//All we've done is added a call to createContext  - thats our context object created!
export  const  AppContext= createContext();
