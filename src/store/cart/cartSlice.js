import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
   name: 'cart',

   initialState: {
      deliveryType:{},
      products:[
         {
            id: 'product001',
            name: 'Faja 001',
            color: 'Negro',
            size: 'L',
            amount: '2'
         },
         {
            id: 'product002',
            name: 'Crema 001',
            amount: '3'
         }
      ],
      client:{},
   },

   reducers: {
      setDeliveryType: ( state, action ) => {
         state.setDeliveryType = action.payload
      },
      addProductToCart:( state, action ) => {
         state.products = state.products.push(action.payload)
      },
   },
})

export const { setDeliveryType, addProductToCart } = cartSlice.actions;