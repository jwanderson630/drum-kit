import React, { useCallback } from "react";
import styled from "styled-components";

const StyledToggleArea = styled.div`
	user-select: none;
	text-align: center;
`;

const StyledToggle = styled.div`
	grid-row: 2;
	grid-column: 2;
	height: 60px;
	width: 60px;
	border-radius: 50%;
	background-color: white;
	box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
	display: inline-grid;
	justify-items: center;
	align-items: center;
	cursor: pointer;
	@media (min-width: 720px) {
		height: 75px;
		width: 75px;
	}
`;

const ToggleTop = styled.div`
	width: 58px;
	height: 58px;
	border-radius: 50%;
	box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3), 0 0 3px 0 rgba(0, 0, 0, 0.3);
	background-color: white;
	position: relative;
	top: -2px;
	transform: ${({ set }) => {
		switch (set) {
		case "A":
			return "rotate(0)";
		case "B":
			return "rotate(120deg)";
		case "C":
			return "rotate(240deg)";
		default:
			return "rotate(0)";
		}
	}};
	transition: transform 200ms ease;
	:before {
		content: "";
		width: 5px;
		height: 5px;
		background-color: #888;
		border-radius: 50%;
		position: absolute;
		top: 38px;
		left: 9px;
		@media (min-width: 720px) {
			top: 49px;
			left: 11px;
		}
	}
	@media (min-width: 720px) {
		width: 73px;
		height: 73px;
	}
`;

const StyledSetLabel = styled.div`
	text-align: center;
	font-size: 1.6rem;
	color: #888;
	width: 25px;
	height: 25px;
	display: inline-block;
	&.a {
	}
	&.b {
		grid-column: 1/4;
		grid-row: 1;
		display: block;
		width: 100%;
		text-align: center;
	}
	&.c {
		grid-row: 2;
		grid-column: 3;
		display: inline-block;
	}
`;

function SetToggle(props) {
	const { set, setSoundSet } = props;
	const handleSetChange = useCallback(
		newSet => {
			switch (newSet) {
			case "A":
				setSoundSet("B");
				break;
			case "B":
				setSoundSet("C");
				break;
			case "C":
				setSoundSet("A");
				break;
			default:
				setSoundSet("A");
			}
		},
		[setSoundSet]
	);
	return (
		<StyledToggleArea>
			<StyledSetLabel className="b">B</StyledSetLabel>
			<StyledSetLabel className="a">A</StyledSetLabel>
			<StyledToggle onClick={() => handleSetChange(set)}>
				<ToggleTop set={set} />
			</StyledToggle>
			<StyledSetLabel className="c">C</StyledSetLabel>
		</StyledToggleArea>
	);
}

export default SetToggle;
