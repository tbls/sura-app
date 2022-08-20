import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
   name: 'ui',

   initialState: {
      isProductsModalVisible: false
   },

   reducers: {
      showProductsModal: ( state ) => {
         state.isProductsModalVisible = true;
      },
      hideProductsModal: ( state ) => {
         state.isProductsModalVisible = false;
      },
   },
});

export const { showProductsModal, hideProductsModal } = uiSlice.actions;