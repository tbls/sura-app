import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice';
import { uiSlice } from './ui/uiSlice';
import { productsSlice } from './products/productsSlice';
import { cartSlice } from './cart/cartSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		ui: uiSlice.reducer,
		products: productsSlice.reducer,
		cart:cartSlice.reducer,
	},
});