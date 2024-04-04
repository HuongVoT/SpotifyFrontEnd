import StyledElementDetail from './ElementDetail.style';

export interface IElementDetailProps {}

export default function ElementDetail({
	type,
	name,
	artist,
	releaseYear,
	counter,
}: {
	type: string;
	name: string;
	artist: string;
	releaseYear: number;
	counter: number;
}) {
	return (
		<StyledElementDetail>
			<img
				className='element__img'
				src='https://i.scdn.co/image/ab67616d00001e02ce6d0eef0c1ce77e5f95bbbc'
			/>
			<div className='element__description'>
				<h4 className='information__type'>{type}</h4>
				<h1 className='information__name'>{name}</h1>
				<div className='element__informations'>
					<h5 className='information__artist'>{artist}</h5>
					<h5 className='information__release-year'>{releaseYear}</h5>
					<h5 className='information__counter'>{counter} songs</h5>
					{/* <h5 className='information__duration'>{albumDuration}</h5> */}
				</div>
			</div>
		</StyledElementDetail>
	);
}
