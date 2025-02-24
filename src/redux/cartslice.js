import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Increment quantity if item already exists
                return state.map((item) => 
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                // Add new item to the cart
                state.push(action.payload);
            }
        },
        RemoveItem: (state, action) => {
            // Remove item by matching id
            return state.filter((item) => item.id !== action.payload.id);
        },
        IncrementQty:(state,action)=>{
            return state.map((item) => 
                    item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
                );

        },
        DecrementQty:(state,action)=>{
            return state.map((item) => 
                    item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
                );

        },
        
    },
});

export const { AddItem, RemoveItem ,IncrementQty,DecrementQty} = cartslice.actions;
export default cartslice.reducer;
