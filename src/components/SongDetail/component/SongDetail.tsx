import ElementDetail from '../../ElementDetail/ElementDetail';
// import { ISongDetails } from '../state/songSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import useAlbum from '../../../hooks/album.hook';

export interface ISongDetailProps {}

export default function SongDetail() {
	const album = useSelector((state: RootState) => state.playlist.album);

	useAlbum();

	const albumType = album.album_type;
	const albumName = album.name;
	const albumArtists = album.artists[0].name;

	const releaseDay = new Date(album.release_date);
	const albumRealseYear = releaseDay.getFullYear();

	const albumCountItems = album.total_tracks;
	return (
		<>
			<ElementDetail
				type={albumType}
				name={albumName}
				artist={albumArtists}
				releaseYear={albumRealseYear}
				counter={albumCountItems}
			/>
		</>
	);
}
