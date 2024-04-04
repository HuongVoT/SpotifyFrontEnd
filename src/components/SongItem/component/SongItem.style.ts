import styled from 'styled-components';

export interface ISongItemProps {}

export const songWrapperHeight: number = 64;
const songImgHeight: number = 52;

const SongItemWrapper = styled.div`
	.song__wrapper {
		display: flex;
		margin: 16px 0;
		width: 250px;
		height: ${songWrapperHeight}px;
		border-radius: 5px;
	}

	.song__img {
		height: ${songImgHeight}px;
		width: ${songImgHeight}px;
		border-radius: 5px;
		margin-right: 10px;
	}

	.song__name {
		color: #dddddd;
		margin-top: 6px;
	}
`;

export default SongItemWrapper;
