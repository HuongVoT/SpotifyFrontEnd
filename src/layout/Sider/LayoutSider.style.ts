import { Layout } from 'antd';
import styled from 'styled-components';

const StyledLayoutSider = styled(Layout)`
	display: flex;
	.sider {
		width: 20vw;
		height: 100vh;
		display: block;
	}
	.content {
		width: 80vw;
	}
`;

export default StyledLayoutSider;
