import React from 'react'


import Intro from './component/Intro';
import Quizz from './component/Quizz';
import Result from './component/Result';
import { Routes, Route } from "react-router-dom";
const style = {
	centerAll: {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#e7ebf0'
	}
}
function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Intro />} />
				<Route path="/Quizz" element={<Quizz />} />
				<Route path="/Result" element={<Result />} />
			</Routes>
		</div>
	);
}

export default App;
