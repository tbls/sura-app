import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    deliveryType: {},
    products: [
      {
        id: 'product001',
        name: 'Faja 001',
        amount: '2',
        observations: 'LLevar una talla M para probarse',
        color: 'Negro',
        size: 'L',
      },
      {
        id: 'product002',
        name: 'Crema 001',
        amount: '3',
        observations: '',
      },
    ],
    client: {},
  },

  reducers: {
    setDeliveryType: (state, action) => {
      state.setDeliveryType = action.payload;
    },
    addProductToCart: (state, action) => {
      state.products = state.products.push(action.payload);
    },
  },
});

export const { setDeliveryType, addProductToCart } = cartSlice.actions;
