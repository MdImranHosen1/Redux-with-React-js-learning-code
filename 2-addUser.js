//1. state - count:0
//2. action -increment, decrement, reset
//3. reducer
//4. store

const { createStore } = require("redux")


const ADD_USER ='INCREMENT'


// state - count:0
const initialState={
    users:['imran'],
    count:1
}

// action -increment, decrement, reset
const addUserAction=(user)=>{
    return {
        type: ADD_USER,
        payload:user
    }
}

// reducer
const addUserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_USER:
            return{
                ...state,
                users: [...state.users,action.payload],
                count: state.count+1
            }
        default:
            return state
            
    }
}

// store
const store= createStore(addUserReducer);

store.subscribe(()=>{
    console.log(store.getState())
});


store.dispatch(addUserAction("Bishworup"))
store.dispatch(addUserAction("Roni"))
