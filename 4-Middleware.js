// product constants
// npm i redux-logger
const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");


const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";


//Initial state
const initialProductsState={
    products:['salt','suger'],
    numberOfProducts:2
}


// Action
const  getProductsActions=()=>{
    return{
        type:GET_PRODUCTS
    }
}
const  addProductsActions=(product)=>{
    return{
        type:ADD_PRODUCTS,
        payload:product,
    }
}


// reducer
const productsReducer=(state=initialProductsState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return state

        case ADD_PRODUCTS:
            return{
                products:[...state.products,action.payload],
                numberOfProducts:state.numberOfProducts+1,
            }
        default:
            return state
    }
}


// store
const store=createStore(productsReducer, applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProductsActions())
store.dispatch(addProductsActions("mango"))

// output

// { products: [ 'salt', 'suger' ], numberOfProducts: 2 }
//  action GET_PRODUCTS @ 02:21:11.683
//    prev state { products: [ 'salt', 'suger' ], numberOfProducts: 2 }
//    action     { type: 'GET_PRODUCTS' }
//    next state { products: [ 'salt', 'suger' ], numberOfProducts: 2 }
// { products: [ 'salt', 'suger', 'mango' ], numberOfProducts: 3 }
//  action ADD_PRODUCTS @ 02:21:11.695
//    prev state { products: [ 'salt', 'suger' ], numberOfProducts: 2 }
//    action     { type: 'ADD_PRODUCTS', payload: 'mango' }
//    next state { products: [ 'salt', 'suger', 'mango' ], numberOfProducts: 3 }