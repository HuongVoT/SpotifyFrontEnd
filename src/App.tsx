// import { useState } from 'react';S
// import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import ListSong from './components/ListSongs/component/ListSong';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SongDetail from './components/SongDetail/component/SongDetail';
// import LayoutSider from './layout/Sider/LayoutSider';
// import {
// 	decrease,
// 	increase,
// 	increaseWithAmount,
// 	decreaseWithAmount,
// } from './reducers/counterSlice';
// import { RootState } from './store/store';
// import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
`;

function App() {
	// const count = useSelector((state: RootState) => state.count.value);
	// const dispatch = useDispatch();
	// const [count, setCount] = useState(0);
	// const [counterAmount, setCounterAmount] = useState('2');
	return (
		<>
			<GlobalStyle />
			{/* <LayoutSider /> */}
			{/* <ListSong /> */}

			<BrowserRouter>
				<Routes>
					<Route path='/playlist' element={<ListSong />} />
					<Route path='/song-details' element={<SongDetail />} />
				</Routes>
			</BrowserRouter>

			{/* <h1>{count}</h1>
			<button onClick={() => dispatch(increase())}>+</button>
			<button onClick={() => dispatch(decrease())}>-</button>
			<input
				value={counterAmount}
				onChange={(event) => setCounterAmount(event.target.value)}
			/>
			<button
				onClick={() => dispatch(increaseWithAmount(Number(counterAmount)))}
			>
				decrease
			</button>
			<button
				onClick={() => dispatch(decreaseWithAmount(Number(counterAmount)))}
			>
				increase
			</button> */}
		</>
	);
}

export default App;
