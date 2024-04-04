import { createSlice } from '@reduxjs/toolkit';

export interface IAlbumProps {
	album_type: string;
	name: string;
	artists: [
		{
			name: string;
		}
	];
	release_date: string;
	total_tracks: number;
}

export type ISongProps = {
	name: string;
	artists: [
		{
			name: string;
		}
	];
	duration_ms: number;
	is_valid: boolean;
};

interface IState {
	playlist: ISongProps[];
	album: IAlbumProps;
}

const initialState: IState = {
	playlist: [],
	album: {
		album_type: '',
		name: '',
		artists: [
			{
				name: '',
			},
		],
		release_date: '',
		total_tracks: -1,
	},
};

export const playlistSlice = createSlice({
	name: 'Play list of spotify',
	initialState,
	reducers: {
		storedPlaylist: (state, action) => {
			state.playlist = action.payload;
		},

		storedAlbumInfor: (state, action) => {
			state.album = action.payload;
		},
	},
});

export const { storedPlaylist, storedAlbumInfor } = playlistSlice.actions;
export default playlistSlice.reducer;
