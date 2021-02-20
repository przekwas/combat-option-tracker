import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: [
		{
			id: 1,
			name: 'Action',
			checked: false
		},
		{
			id: 2,
			name: 'Movement',
			checked: false
		},
		{
			id: 3,
			name: 'Reaction',
			checked: false
		},
		{
			id: 4,
			name: 'Bonus Action',
			checked: false
		}
	]
};

const optionsSlice = createSlice({
	name: 'options',
	initialState,
	reducers: {
		toggle: (state, action) => {
			state.list[action.payload.idx].checked = !state.list[action.payload.idx].checked;
		},
		newTurn: () => initialState
	}
});

export const { toggle, newTurn } = optionsSlice.actions;

export default optionsSlice.reducer;
