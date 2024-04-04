import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getSongsOfPlaylist from '../axios/getSongsOfPlaylist';
import {
	storedPlaylist
} from '../components/ListSongs/state/playlistSlice';

const usePlaylist = () => {
	const dispatch = useDispatch();
	// const [playlist, setPlaylist] = useState<ISongProps[]>([]);
	useEffect(() => {
		getSongsOfPlaylist()
			.then((result) => {
				// console.log(result);
				const playlistResponse = result.tracks.items;
				dispatch(storedPlaylist(playlistResponse));
				// setPlaylist(playlistResponse);
			})
			.catch((error: AxiosError) => {
				throw new Error(`${error}`);
			});
	}, []);
};
export default usePlaylist;
