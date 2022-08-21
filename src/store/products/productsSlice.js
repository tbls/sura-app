import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
   name: 'products',

	initialState: {
		products: [
			{
			id: 'prod001',
			name: 'Fajas',
			list: [
				{
               id: 'faj001',
					name: 'Cintura de avispa',
					haveColors: true,
					haveSizes: true,
				},
            {
               id: 'faj002',
					name: '3 Velcros',
					haveColors: true,
					haveSizes: true,
				},
            {
               id: 'faj003',
					name: '4 bandas',
					haveColors: true,
					haveSizes: true,
				},
				{
               id: 'faj004',
					name: 'faja 004',
					haveColors: true,
					haveSizes: true,
				},
			],
			},
			{
			id: 'prod002',
			name: 'Cremas',
			list: [
				{
					id: 'crem001',
					name: 'Crema 001',
					haveColors: false,
					haveSizes: false,
				},
				{
					id: 'crem002',
					name: 'Crema 002',
					haveColors: false,
					haveSizes: false,
				},
				{
					id: 'crem003',
					name: 'Crema 003',
					haveColors: false,
					haveSizes: false,
				},
			],
			},
		],
		activeProduct: {
			id: null,
         name: null,
			haveColors: false,
			haveSizes: false,
		},
	},

   reducers: {
      setActiveProduct: (state, action) => {
			state.activeProduct.id = action.payload.id;
			state.activeProduct.name = action.payload.name;
			state.activeProduct.haveColors = action.payload.haveColors;
			state.activeProduct.haveSizes = action.payload.haveSizes;
		},
   },
})

export const { setActiveProduct } = productsSlice.actions;