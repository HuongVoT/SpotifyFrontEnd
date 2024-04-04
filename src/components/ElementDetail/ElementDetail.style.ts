import styled from 'styled-components';

const StyledElementDetail = styled.div`
	
		display: flex;
		margin: 50px;
	
	.element__img {
		width: 200px;
		height: 200px;
		border-radius: 5px;
	}

	.element__description {
		padding: 100px 0 0 20px;
		.information__type {
			text-transform: capitalize;
		}
		.information__name {
			font-size: 32px;
			margin: 12px 0;
		}
	}

	.element__informations {
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
`;
export default StyledElementDetail;
