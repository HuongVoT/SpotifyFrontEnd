import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../reducers/counterSlice';
import playlistSlice from '../components/ListSongs/state/playlistSlice';

export const store = configureStore({
	reducer: {
		count: counterSlice,
		playlist: playlistSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
