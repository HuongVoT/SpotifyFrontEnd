import styled from 'styled-components';

const StyledListSong = styled.div`
	.listsong__album {
		display: flex;
		margin: 50px;
	}

	.playlist__img {
		width: 200px;
		height: 200px;
		border-radius: 5px;
	}

	.playlist__description {
		padding: 100px 0 0 20px;
		.information__type {
			text-transform: capitalize;
		}
		.information__name {
			font-size: 32px;
			margin: 12px 0;
		}
	}

	.playlist__informations {
		display: flex;
		h5 {
			padding: 0 8px;
		}
		.information__artist {
			color: #bbb;
		}
		.information__release-year {
			border-left: 1px solid #fff;
			border-right: 1px solid #fff;
		}
	}

	.listsong__wrapper {
		width: 90vw;
	}

	.col__title--align-right {
		text-align: center;
	}

	.col__title {
		font-size: 18px;
		font-weight: 400;
		color: #ddd;
	}

	.row__song-item:hover {
	}

	.song__play-icon {
		font-size: 24px;
		color: #fff;
		margin-left: 34px;
	}

	.song__index {
		color: #fff;
		font-size: 18px;
		text-align: center;
	}

	.song__album {
		color: #dbdbdb;
		font-weight: 500;
	}

	.song__duration {
		margin-left: 10px;
		color: #fff;
	}

	.col__item-flex {
		display: flex;
		justify-content: space-between;
		.song__edit-icon {
			color: #1cd760;
			padding: 6px;
			text-align: center;
			cursor: pointer;
		}
	}
`;

export default StyledListSong;
