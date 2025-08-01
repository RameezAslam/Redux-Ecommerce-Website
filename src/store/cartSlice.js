import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import all_products from '../Components/Assets/all_product.js';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {id, quantity, selectedSize} = action.payload;
            const product = all_products.find(p => p.id === id);

              if (!selectedSize) {
                alert("Please select a size before adding to cart.");
                return;
              }

            if (!product) return;

            const existingItem = state.cartItems.find(Item => Item.id === id && Item.selectedSize === selectedSize);

            if (existingItem) {
                existingItem.quantity+= quantity;
            } else {
                state.cartItems.push({...product, quantity, selectedSize });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(Item => Item.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
        },
        updateCartQuantity: (state, action) => {
            const {id, quantity} = action.payload;
            const existingItem = state.cartItems.find(Item => Item.id === id);

            if (existingItem) {
                existingItem.quantity = quantity;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    }
})

export const { addToCart, removeFromCart, clearCart, updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;