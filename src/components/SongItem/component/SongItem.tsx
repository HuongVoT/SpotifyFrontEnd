import SongItemWrapper from './SongItem.style';

export default function SongItem({ name }: { name: string }) {
	return (
		<SongItemWrapper>
			<div className='song__wrapper'>
				<img
					className='song__img'
					src='https://coffeeproject.com.ph/cdn/shop/articles/Songs_to_Calm_Your_Mind_1024x.jpg?v=1623202342'
				/>
				<h3 className='song__name'>{name}</h3>
			</div>
		</SongItemWrapper>
	);
}
