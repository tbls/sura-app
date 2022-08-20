import { configureStore } from '@reduxjs/toolkit';

import {authSlice} from './auth/authSlice';
import { equipmentsSlice } from './equipments/equipmentsSlice';
import { productsSlice } from './products/productsSlice';
import { uiSlice } from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    equipments: equipmentsSlice.reducer,
    products: productsSlice.reducer,
  },
});