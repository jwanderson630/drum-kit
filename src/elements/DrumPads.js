import React from "react";
import styled from "styled-components";
import DrumPad from "./DrumPad";
import kick1 from "../sounds/kick 1.wav";
import kick2 from "../sounds/kick 2.wav";
import kick3 from "../sounds/kick 3.wav";
import kick4 from "../sounds/kick 4.wav";
import kick5 from "../sounds/kick 5.wav";
import kick6 from "../sounds/kick 6.wav";
import kick7 from "../sounds/kick 7.wav";
import kick8 from "../sounds/kick 8.wav";
import kick9 from "../sounds/kick 9.wav";
import snare1 from "../sounds/snare 1.wav";
import snare2 from "../sounds/snare 2.wav";
import snare3 from "../sounds/snare 3.wav";
import snare4 from "../sounds/snare 4.wav";
import snare5 from "../sounds/snare 5.wav";
import snare6 from "../sounds/snare 6.wav";
import snare7 from "../sounds/snare 7.wav";
import snare8 from "../sounds/snare 8.wav";
import snare9 from "../sounds/snare 9.wav";
import bass1 from "../sounds/808 1.wav";
import bass2 from "../sounds/808 2.wav";
import bass3 from "../sounds/808 3.wav";
import clap1 from "../sounds/clap 1.wav";
import clap2 from "../sounds/clap 2.wav";
import clap3 from "../sounds/clap 3.wav";
import cym1 from "../sounds/cym 1.wav";
import cym2 from "../sounds/cym 2.wav";
import cym3 from "../sounds/cym 3.wav";

const drumSounds = {
	A: [
		{ key: "Q", sound: kick1, keyCode: 81, color: "#e6261f", name: "Kick 1" },
		{ key: "W", sound: kick2, keyCode: 87, color: "#eb7532", name: "Kick 2" },
		{ key: "E", sound: kick3, keyCode: 69, color: "#f7d038", name: "Kick 3" },
		{ key: "A", sound: snare1, keyCode: 65, color: "#a3e048", name: "Snare 1" },
		{ key: "S", sound: snare2, keyCode: 83, color: "#49da9a", name: "Snare 2" },
		{ key: "D", sound: snare3, keyCode: 68, color: "#34bbe6", name: "Snare 3" },
		{ key: "Z", sound: bass1, keyCode: 90, color: "#4355db", name: "808 1" },
		{ key: "X", sound: bass2, keyCode: 88, color: "#d23be7", name: "808 2" },
		{ key: "C", sound: bass3, keyCode: 67, color: "#9400ff", name: "808 3" }
	],
	B: [
		{ key: "Q", sound: kick4, keyCode: 81, color: "#e6261f", name: "Kick 4" },
		{ key: "W", sound: kick5, keyCode: 87, color: "#eb7532", name: "Kick 5" },
		{ key: "E", sound: kick6, keyCode: 69, color: "#f7d038", name: "Kick 6" },
		{ key: "A", sound: snare4, keyCode: 65, color: "#a3e048", name: "Snare 4" },
		{ key: "S", sound: snare5, keyCode: 83, color: "#49da9a", name: "Snare 5" },
		{ key: "D", sound: snare6, keyCode: 68, color: "#34bbe6", name: "Snare 6" },
		{ key: "Z", sound: clap1, keyCode: 90, color: "#4355db", name: "Clap 1" },
		{ key: "X", sound: clap2, keyCode: 88, color: "#d23be7", name: "Clap 2" },
		{ key: "C", sound: clap3, keyCode: 67, color: "#9400ff", name: "Clap 3" }
	],
	C: [
		{ key: "Q", sound: kick7, keyCode: 81, color: "#e6261f", name: "Kick 7" },
		{ key: "W", sound: kick8, keyCode: 87, color: "#eb7532", name: "Kick 8" },
		{ key: "E", sound: kick9, keyCode: 69, color: "#f7d038", name: "Kick 9" },
		{ key: "A", sound: snare7, keyCode: 65, color: "#a3e048", name: "Snare 7" },
		{ key: "S", sound: snare8, keyCode: 83, color: "#49da9a", name: "Snare 8" },
		{ key: "D", sound: snare9, keyCode: 68, color: "#34bbe6", name: "Snare 9" },
		{ key: "Z", sound: cym1, keyCode: 90, color: "#4355db", name: "Cym 1" },
		{ key: "X", sound: cym2, keyCode: 88, color: "#d23be7", name: "Cym 2" },
		{ key: "C", sound: cym3, keyCode: 67, color: "#9400ff", name: "Cym 3" }
	]
};

const StyledDrumPads = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 1.5rem;
	height: 310px;
	width: 250px;
	padding: 1.5rem;
	box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	@media (min-width: 350px) {
		height: 300px;
		width: 300px;
	}
	@media (min-width: 720px) {
		height: 450px;
		width: 450px;
	}
`;

function DrumPads(props) {
	return (
		<StyledDrumPads className="drum-pads">
			{drumSounds[props.set].map(sound => (
				<DrumPad
					sound={sound.sound}
					keyCode={sound.keyCode}
					triggerKey={sound.key}
					color={sound.color}
					key={sound.name}
					setDispSound={() => props.setDispSound(sound.name)}
				/>
			))}
		</StyledDrumPads>
	);
}

export default DrumPads;
