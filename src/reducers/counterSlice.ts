import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const couterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increase: (state) => {
			state.value += 10;
		},
		decrease: (state) => {
			state.value -= 10;
		},
		increaseWithAmount: (state, action) => {
			state.value += action.payload;
		},
		decreaseWithAmount: (state, action) => {
			state.value -= action.payload;
		},
	},
});

export const { increase, decrease, increaseWithAmount, decreaseWithAmount } =
	couterSlice.actions;
export default couterSlice.reducer;
