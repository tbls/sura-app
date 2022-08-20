import { createSlice } from '@reduxjs/toolkit';

export const equipmentsSlice = createSlice({
	name: 'equipments',

	initialState: {
		equipments: [
			{
			Id: 'eq001',
			Name: 'Bombas de Hot Oil',
			List: [
				{
					tag: 'PAY-5810',
					condition: 'Operativo',
					state: 'E/S',
					observation: ' ',
				},
				{
					tag: 'PAY-5820',
					condition: 'Operativo',
					state: 'E/S',
					observation: ' ',
				},
				{
					tag: 'PAY-5830',
					condition: 'Inoperativo',
					state: 'F/S',
					observation: 'Fuga por sello mecánico',
				},
				{
					tag: 'PAY-15810',
					condition: 'Operativo',
					state: 'E/S',
					observation: '',
				},
				{
					tag: 'PAY-15820',
					condition: 'Operativo',
					state: 'E/S',
					observation: '',
				},
				{
					tag: 'PAY-15830',
					condition: 'Inoperativo',
					state: 'F/S',
					observation: 'Motor dañado',
				},
			],
			},
			{
			Id: 'eq002',
			Name: 'Hornos de Hot Oil',
			List: [
				{
					tag: 'EAP-5850',
					condition: 'Operativo',
					state: 'E/S',
				},
				{
					tag: 'EAP-5860',
					condition: 'Inoperativo',
					state: 'F/S',
				},
				{
					tag: 'EAP-5870',
					condition: 'Operativo con Observaciones',
					state: 'S/B',
				},
			],
			},
		],
		activeEquipment: {
			tag: '',
			condition: '',
			state: '',
		},
	},

	reducers: {
		setActiveEquipment: (state, action) => {
			state.activeEquipment.tag = action.payload.tag;
			state.activeEquipment.condition = action.payload.condition;
			state.activeEquipment.state = action.payload.state;
		},
	},
});

export const { setActiveEquipment } = equipmentsSlice.actions;
