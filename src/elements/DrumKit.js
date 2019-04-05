import React, { useState } from "react";
import styled from "styled-components";
import Display from "./Display";
import LoopButtons from "./LoopButtons";
import DrumPads from "./DrumPads";
import SetToggle from "./SetToggle";

const StyledDrumKit = styled.div`
	background-color: #fffeff;
	box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.1);
	padding: 1.5rem;
	border-radius: 1.5rem;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-rows: auto auto;
	grid-template-columns: auto;
	max-width: 90%;
	margin: 0 auto;
	@media (min-width: 720px) {
		grid-gap: 1.5rem;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
	}
`;

const StyledSideBar = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr auto;
	grid-gap: 1.5rem;
	@media (min-width: 720px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		width: 200px;
		height: 450px;
	}
`;

const DrumKit = () => {
	const [dispSound, setDispSound] = useState("Kick 1");
	const [dispLoop, setDispLoop] = useState("None");
	const [soundSet, setSoundSet] = useState("A");
	return (
		<StyledDrumKit id="drum-machine">
			<StyledSideBar>
				<Display dispSound={dispSound} dispLoop={dispLoop} dispSet={soundSet} />
				<LoopButtons setDispLoop={setDispLoop} />
				<SetToggle set={soundSet} setSoundSet={setSoundSet} />
			</StyledSideBar>
			<DrumPads setDispSound={setDispSound} set={soundSet} />
		</StyledDrumKit>
	);
};

export default DrumKit;
