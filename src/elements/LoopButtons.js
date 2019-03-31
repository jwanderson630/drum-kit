import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import LoopButton from "./LoopButton";
import loop1 from "../sounds/Loop 1.wav";
import loop2 from "../sounds/Loop 2.wav";
import loop3 from "../sounds/Loop 3.wav";
import loop4 from "../sounds/Loop 4.wav";
import loop5 from "../sounds/Loop 5.wav";
import loop6 from "../sounds/Loop 6.wav";

const StyledButtons = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-ros: 1fr 1fr;
	grid-gap: 1rem;
`;

const loops = [
	{ key: "1", sound: loop1, keyCode: 49, color: "#e6261f", name: "Loop 1" },
	{ key: "2", sound: loop2, keyCode: 50, color: "#eb7532", name: "Loop 2" },
	{ key: "3", sound: loop3, keyCode: 51, color: "#f7d038", name: "Loop 3" },
	{ key: "4", sound: loop4, keyCode: 52, color: "#a3e048", name: "Loop 4" },
	{ key: "5", sound: loop5, keyCode: 53, color: "#49da9a", name: "Loop 5" },
	{ key: "6", sound: loop6, keyCode: 54, color: "#34bbe6", name: "Loop 6" }
];

function reducer(state, action) {
	switch (action.type) {
	case "PLAY":
		return {
			name: action.name,
			loop: action.loop
		};
	case "STOP":
		return {
			name: "None",
			loop: null
		};
	default:
		return {
			name: "None",
			loop: null
		};
	}
}

function LoopButtons(props) {
	const [state, dispatch] = useReducer(reducer, {
		loop: null
	});

	useEffect(() => {
		const name = state.name || "None";
		return props.setDispLoop(name);
	}, [props, state.name]);

	return (
		<StyledButtons>
			{loops.map(loop => (
				<LoopButton
					key={loop.key}
					loop={loop.sound}
					keyCode={loop.keyCode}
					color={loop.color}
					triggerKey={loop.key}
					name={loop.name}
					playing={state.loop === loop.sound}
					dispatch={dispatch}
				/>
			))}
		</StyledButtons>
	);
}

export default LoopButtons;
