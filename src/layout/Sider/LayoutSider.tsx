import { BarcodeOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import StyledLayoutSider from './LayoutSider.style';
import { Content } from 'antd/es/layout/layout';
import ListSong from '../../components/ListSongs/component/ListSong';

export interface ISiderProps {}

export default function LayoutSider() {
	const siderMenu = [
		{
			key: '1',
			icon: <HomeOutlined />,
			label: 'Home',
		},
		{
			key: '2',
			icon: <BarcodeOutlined />,
			label: 'My Library',
		},
	];
	return (
		<StyledLayoutSider>
			<Menu
				className='sider'
				defaultSelectedKeys={['1']}
				mode='inline'
				items={siderMenu}
			/>
			<Layout className='content'>
				<Content>
					<ListSong />
				</Content>
			</Layout>
		</StyledLayoutSider>
	);
}
