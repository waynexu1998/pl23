import React from 'react';
import './scss/App.scss';
import Background from './components/Background';
import Clock from 'react-live-clock';

function App() {
	return (
		<div className="App">
			<Background/>
			<div className="main">
				<div className="row-1">
					<h1>PL23_</h1>
					<div className="row-1__time">
						<Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> PST
					</div>
				</div>
				<div className="row-2">
					<p className="muted">ACTIVE...</p>
				</div>
			</div>
		</div>
	);
}

export default App;
