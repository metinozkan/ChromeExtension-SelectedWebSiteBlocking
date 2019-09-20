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
			links: ''
		};
	}

	addLink = (link) => {
		const localLinks = JSON.parse(window.localStorage.getItem('links'));
		if (localLinks != null) {
			const controlLocalLinks = this.controlType(localLinks);
			if (this.isThereLocal(link, controlLocalLinks)) {
				console.log('zaten var');
			} else {
				controlLocalLinks.push(link);
				this.updateLocalStroge(controlLocalLinks);
			}
		} else this.updateLocalStroge(link);
	};

	controlType = (value) => {
		if (typeof value === 'object' && value.constructor === Array) return value;
		else {
			var controlLocalLinks = JSON.parse('[' + window.localStorage.getItem('links') + ']');
			return controlLocalLinks;
		}
	};

	isThereLocal = (link, localLinks) => {
		if (localLinks.includes(link)) {
			return true;
		} else {
			return false;
		}
	};
	updateLocalStroge = (newLinks) => {
		window.localStorage.setItem('links', JSON.stringify(newLinks));
	};
	getLink = () => {
		const local = window.localStorage.getItem('links');
		console.log(local.link);
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
