import { createSlice } from "@reduxjs/toolkit";
import { ProductsProps } from "../../type";

interface StoreStateProps{
    productData: ProductsProps[],
    userInfo: null | string,
    orderData: [],
};

const initialState : StoreStateProps = {
    productData: [],
    userInfo: null,
    orderData: [],
};

export const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.productData.find((item:ProductsProps) => {
                item._id === action.payload._id
            });

            if (existingProduct){
                existingProduct.quantity += action.payload.quantity
            }else {
                state.productData.push(action.payload)
            }
        },

        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: ProductsProps) => item._id === action.payload._id);
                existingProduct && existingProduct.quantity++;
        },

        decreasingQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: ProductsProps) => item._id === action.payload._id
            );

            if (existingProduct?.quantity === 1){
                existingProduct.quantity === 1;
            }else {
                existingProduct && existingProduct.quantity--;
            }
        },

        // Delete an item
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload);
        },

        // To reset
        resetCart: (state) => {
            state.productData = [];
        },
    },
});

export const {
    addToCart,
     increaseQuantity, 
     decreasingQuantity, 
     deleteProduct, 
     resetCart
    } = shoppingSlice.actions;
export default shoppingSlice.reducer;

