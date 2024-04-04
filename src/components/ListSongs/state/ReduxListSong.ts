// import { createStore } from '@reduxjs/toolkit';
import { ISongItemProps } from '../../SongItem/component/SongItem.style';

export interface IActionOfRedux {
	type: string;
	payload: ISongItemProps[];
}
// interface ITest {
// 	type: string;
// 	payload: number;
// }
const initialState: ISongItemProps[] = [
	{
		name: '',
		artists: [
			{
				name: '',
			},
		],
		duration_ms: -1,
	},
];

export const playlistReducer = (
	state = initialState,
	action: IActionOfRedux
): ISongItemProps[] => {
	switch (action.type) {
		case 'STORED_PLAYLIST':
			// return action.payload;
			return action.payload;
			break;

		default:
			return state;
			break;
	}
};

// export const playlistStore = createStore(playlistReducer);
// export const playlistData = playlistStore.getState();
// export const playlistDispatch = playlistStore.dispatch;


