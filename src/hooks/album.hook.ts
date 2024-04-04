import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getAlbum from '../axios/getAlbum';
import { storedAlbumInfor } from '../components/ListSongs/state/playlistSlice';

const useAlbum = () => {
	const dispatch = useDispatch();
	// const [album, setAlbum] = useState(null);
	useEffect(() => {
		getAlbum()
				.then((result) => {
					const albumResponse = result;
					dispatch(storedAlbumInfor(albumResponse));
				})
				.catch((error) => {
					throw new Error(error);
				});
	}, []);
	// if (album === null) {
	// 	return 'Loading....';
	// } else return album;
};
export default useAlbum;
