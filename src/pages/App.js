import React from 'react';
import './scss/App.scss';
import Background from './components/Background';
import ActiveLink from './components/ActiveLink';
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
					<h2 className="muted">ACTIVE...</h2>
				</div>
				<div className="row-3">
					<ActiveLink/>
					<div className="row-3__paragraph">
						<h2>x groupbuy_date: <span>(09.10.2021 - 10.11.2021)</span></h2>
						<h2>x manufactuer: <span>gmk</span></h2>
						<h2>x delivery_estimation: <span>(q3 - 2022)</span></h2>
						<h2>x kits_offered: <span>base, novelties, numpad, spacebar</span></h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
