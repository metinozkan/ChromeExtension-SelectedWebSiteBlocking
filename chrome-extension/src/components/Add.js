import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
	margin-top: 1em;
	position: relative;
`;

class Add extends Component {
	add = () => {
		const inputText = document.querySelector('input[type="text"]');
		console.log(inputText.value);
		this.props.addLink(inputText.value);
	};
	render() {
		console.log(this.props);
		return (
			<InputWrapper>
				<input type="text" placeholder="paste link" />
				<button
					className="button"
					onClick={() => {
						this.add();
					}}
				>
					Add
				</button>
			</InputWrapper>
		);
	}
}
export default Add;
