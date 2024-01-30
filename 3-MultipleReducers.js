// product constants
const { createStore, combineReducers } = require("redux")


const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//Initial state
const initialProductsState={
    products:['salt','suger'],
    numberOfProducts:2
}

//Initial state
const initialCartState={
    cart:['salt'],
    numberOfProducts:1
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
// Action
const  getCartActions=()=>{
    return{
        type:GET_CART_ITEMS
    }
}
const  addCartActions=(product)=>{
    return{
        type:ADD_CART_ITEMS,
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

// reducer
const cartReducer=(state=initialCartState,action)=>{
    switch (action.type) {
        case GET_CART_ITEMS:
            return state

        case ADD_CART_ITEMS:
            return{
                cart:[...state.cart,action.payload],
                numberOfProducts:state.numberOfProducts+1,
            }
        default:
            return state
    }
}
// combineReducers
const rootReducer=combineReducers({
    productR:productsReducer,
    cartR: cartReducer
    
})

// store
const store=createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProductsActions())
store.dispatch(addProductsActions("mango"))

store.dispatch(getCartActions())
store.dispatch(addCartActions("suger"))
