import axios, { AxiosError, AxiosResponse } from 'axios';

const getSongInformation = () => {
	return axios('https://api.spotify.com/v1/tracks/7xQqmO3xgaQxIyjkEF1CKr', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
		},
	})
		.then((res: AxiosResponse) => {
			return res;
		})
		.catch((err: AxiosError) => {
			throw new Error(`${err.code}, ${err.message}`);
		});
};

export default getSongInformation;
