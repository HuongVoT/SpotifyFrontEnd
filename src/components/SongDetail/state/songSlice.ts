export interface ISongDetails {
	name: string;
	duration_ms: number;
	artists: [
		{
			name: string;
		}
	];
}

const initialState: ISongDetails = {
	name: '',
	duration_ms: -1,
	artists: [
		{
			name: '',
		},
	],
};

interface IAction {
	type: string;
	payload: ISongDetails;
}

export const songReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'STORED_SONG_INFORMATION':
			break;

		default:
            return state;
			break;
	}
};
