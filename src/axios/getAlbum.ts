import axios, { AxiosError, AxiosResponse } from 'axios';

const getAlbum = () => {
	return axios(`https://api.spotify.com/v1/albums/2pANdqPvxInB0YvcDiw4ko`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
		},
	})
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((error: AxiosError) => {
			throw new Error(`${error.code}, ${error.message}`);
		});
};
export default getAlbum;
