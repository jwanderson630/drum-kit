import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
	padding: 1.5rem;
	border-radius: 15px;
	background-color: rgba(0, 0, 0, 0.1);
	box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.1);
	color: #333333cc;
	user-select: none;
	grid-column: 1/3;
	@media (min-width: 720px) {
		grid-column: 1/2;
	}
`;

const StyledLabel = styled.div`
	font-weight: 600;
	font-size: 1rem;
	margin-bottom: 0.2rem;
`;

const StyledInfo = styled.div`
	font-weight: 900;
	font-size: 2rem;
	margin-bottom: 0.5rem;
`;

function Display(props) {
	return (
		<StyledDisplay>
			<StyledLabel>Last played:</StyledLabel>
			<StyledInfo>{props.dispSound}</StyledInfo>
			<StyledLabel>Looping:</StyledLabel>
			<StyledInfo>{props.dispLoop}</StyledInfo>
			<StyledLabel>Sound set:</StyledLabel>
			<StyledInfo>Set {props.dispSet}</StyledInfo>
		</StyledDisplay>
	);
}

export default Display;
