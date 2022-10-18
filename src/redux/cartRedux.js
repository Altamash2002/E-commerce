import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        products : [] , 
        quantity : 0 , 
        total : 0
    },
    reducers : {
        addProduct :(state , action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.prize *action.payload.quantity;
        } 
    },
    removeProduct:(state, action)=>{
        if(state.quantity > 0) {
            state.quantity -= 1;
            state.total = state.total - action.payload.prize.pop(1);
            state.products.pop(1);
        }
    },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;