import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import DrumKit from "./elements/DrumKit";

const StyledAppContainer = styled.div`
	min-height: 100vh;
	min-width: 100vw;
	display: grid;
	justify-items: center;
	align-items: center;
`;

class App extends Component {
	render() {
		return (
			<StyledAppContainer>
				<DrumKit />
				<GlobalStyles />
			</StyledAppContainer>
		);
	}
}

export default App;
