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
					colors: true,
					sizes: true,
				},
            {
               id: 'faj002',
					name: '3 Velcros',
					colors: true,
					sizes: true,
				},
            {
               id: 'faj003',
					name: '4 bandas',
					colors: true,
					sizes: true,
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
					colors: false,
					sizes: true,
				},
				{
					id: 'crem002',
					name: 'Crema 002',
					colors: false,
					sizes: true,
				},
				{
					id: 'crem003',
					name: 'Crema 003',
					colors: false,
					sizes: true,
				},
			],
			},
		],
		activeProduct: {
			id: null,
         name: null,
			colors: null,
         sizes: null
		},
	},

   reducers: {
      setActiveProduct: (state, action) => {
			state.activeProduct.id = action.payload.id;
			state.activeProduct.name = action.payload.name;
			state.activeProduct.colors = action.payload.colors;
			state.activeProduct.sizes = action.payload.sizes;
		},
   },
})

export const { setActiveProduct } = productsSlice.actions;