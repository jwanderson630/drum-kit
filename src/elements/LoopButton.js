import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledButtonSlot = styled.div`
	box-shadow: inset 1px 2px 2px rgba(0, 0, 0, 0.05);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	border-radius: 8px;
	padding: 5px;
	user-select: none;
`;

const StyledButton = styled.button`
border: 0;
background-color: #ddd;
font-size: 30px;
color: #ffffff66
box-shadow: inset 0 0 15px rgba(255,255,255,0.5), 0px -3px 45px 1px #ffffffaa;
border-radius: 8px;
transform: translate3d(0, 1px, 1px) scale(1.25);
transition: all 50ms linear;
&:focus {
    outline 0;
}
&.active {
    background-color: ${({ color }) => color};
    transform: translate3d(0, 2px, 2px) scale(1.2);
    box-shadow: inset 0 0 15px rgba(0,0,0,0.2), 0px -3px 45px 1px ${({
		color
	}) => color + "aa"};
    color: #ffffffee
   
}
`;

function LoopButtons(props) {
	const btnRef = useRef();
	const { playing, dispatch, loop, triggerKey, color, name } = props;
	useEffect(() => {
		const ref = btnRef.current;
		window.addEventListener("keydown", e => {
			if (e.keyCode === props.keyCode) ref.click();
		});
		return () => {
			window.removeEventListener("keydown", e => {
				if (e.keyCode === props.keyCode) ref.click();
			});
		};
	}, [props.keyCode]);

	return (
		<StyledButtonSlot>
			<StyledButton
				ref={btnRef}
				onClick={() =>
					playing
						? dispatch({ type: "STOP" })
						: dispatch({ type: "PLAY", loop: loop, name: name })
				}
				className={playing ? "active" : null}
				color={color}
			>
				{triggerKey}
			</StyledButton>
			{playing ? <audio src={loop} autoPlay loop /> : null}
		</StyledButtonSlot>
	);
}

export default LoopButtons;
