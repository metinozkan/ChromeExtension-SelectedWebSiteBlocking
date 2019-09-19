import React, { Component } from 'react';
import './App.css';
import Add from './components/Add';
import styled from 'styled-components';

const ListWrapper = styled.div`
	width: 16em;
	height: 18em;
	background: white;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [],
			controlLink: []
		};
	}

	addLink = (link) => {
		this.state.links.push({ link });
		console.log('gercek');
		console.log('state de ki link', this.state.links);

		const linksLocal = window.localStorage.getItem('links');
		console.log(linksLocal);
	};

	getLink = () => {
		const local = window.localStorage.getItem('links');
		console.log(local);
	};

	render() {
		return (
			<div className="App">
				<ListWrapper />

				<Add addLink={this.addLink} />
			</div>
		);
	}
}
export default App;
