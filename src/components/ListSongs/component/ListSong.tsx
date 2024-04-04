import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import { Col, List, Row } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAlbum from '../../../hooks/album.hook';
import usePlaylist from '../../../hooks/playlist.hook';
import { RootState } from '../../../store/store';
import miliSecondToMinute from '../../../utils/ConvertMiliSecondToMinute';
import ElementDetail from '../../ElementDetail/ElementDetail';
import SongItem from '../../SongItem/component/SongItem';
import {
	ISongProps,
	storedPlaylist
} from '../state/playlistSlice';
import StyledListSong from './ListSong.style';

export interface IListSongProps {
	tracks: {
		items: ISongProps[];
	};
}

function ListSong() {
	const playlist = useSelector((state: RootState) => state.playlist.playlist);
	const album = useSelector((state: RootState) => state.playlist.album);
	const dispatch = useDispatch();

	usePlaylist();
	useAlbum();

	const [songPlaying, setSongPlaying] = useState<number | null>(null);

	const albumType = album.album_type;
	const albumName = album.name;
	const albumArtists = album.artists[0].name;

	const releaseDay = new Date(album.release_date);
	const albumRealseYear = releaseDay.getFullYear();

	const albumCountItems = album.total_tracks;
	// const albumDuration = '2 hr 19 min';

	return (
		<StyledListSong>
			<ElementDetail
				type={albumType}
				name={albumName}
				artist={albumArtists}
				releaseYear={albumRealseYear}
				counter={albumCountItems}
			/>

			<div className='listsong__wrapper'>
				<Row>
					<Col className='col__title col__title--align-right' span={2}>
						#
					</Col>
					<Col className='col__title' span={12}>
						Title
					</Col>
					<Col className='col__title' span={6}>
						Album
					</Col>
					<Col className='col__title' span={4}>
						Duration
					</Col>
				</Row>

				<List
					itemLayout='horizontal'
					dataSource={playlist}
					renderItem={(item, index: number) => (
						<Row justify='center' align='middle' className='row__song-item'>
							<Col span={2}>
								{songPlaying === index ? (
									<CaretRightOutlined
										className='song__play-icon'
										onClick={() => setSongPlaying(null)}
									></CaretRightOutlined>
								) : (
									<div
										className='song__index'
										onClick={() => setSongPlaying(index)}
									>
										{index + 1}
									</div>
								)}
							</Col>
							<Col span={12}>
								<SongItem name={item.name} />
							</Col>
							<Col span={6}>
								<p className='song__album'>{item.artists[0].name}</p>
							</Col>
							<Col className='col__item-flex' span={4}>
								<p className='song__duration'>
									{miliSecondToMinute(item.duration_ms)}
								</p>

								<CheckCircleFilled
									className='song__edit-icon'
									onClick={() => {
										const newPlaylist = playlist.filter(
											(song, id) => id !== index
										);
										dispatch(storedPlaylist(newPlaylist));
									}}
								></CheckCircleFilled>
							</Col>
						</Row>
					)}
				/>
			</div>
		</StyledListSong>
	);
}
export default ListSong;
