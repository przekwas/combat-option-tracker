import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: []
};

function arraymove(arr, fromIndex, toIndex) {
	const element = arr[fromIndex];
	arr.splice(fromIndex, 1);
	arr.splice(toIndex, 0, element);
}

const trackerSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		add: (state, action) => {
			state.list.push({ id: Date.now().toString(), dead: false, name: action.payload.name });
		},
		move: (state, action) => {
			arraymove(state.list, action.payload.from, action.payload.to);
		},
		toggleStatus: (state, action) => {
			state.list[action.payload.idx].dead = !state.list[action.payload.idx].dead;
		},
		remove: (state, action) => {
			state.list.splice(action.payload.idx, 1);
		},
		reset: () => initialState
	}
});

export const { add, move, toggleStatus, remove, reset } = trackerSlice.actions;

export default trackerSlice.reducer;
