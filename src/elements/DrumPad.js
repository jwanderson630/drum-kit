import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";

const StyledDrumSlot = styled.div`
	box-shadow: inset 2px 4px 5px rgba(0, 0, 0, 0.1);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	border-radius: 8px;
	padding: 5px;
	user-select: none;
`;

const StyledDrumPad = styled.button`
    border: 0;
    background-color: ${({ color }) => color};
    font-size: 60px;
    color: #ffffff66
    box-shadow: inset 0 0 95px rgba(0,0,0,0.4), 0px -3px 45px 1px ${({
		color
	}) => color + "aa"};
    border-radius: 8px;
    transform: translate3d(0, 3px, 3px) scale(1.1);
    transition: all 5ms linear;
    &:focus {
        outline 0;
    }
    &.down {
        transform: translate3d(0, 2px, 2px) scale(1.05);
        box-shadow: inset 0 0 95px rgba(0,0,0,0.2), 0px -3px 45px 1px ${({
		color
	}) => color + "aa"};
    color: #ffffffee
    }
`;

function useClickKeyAudio(keyCode) {
	const [down, setDown] = useState(false);
	const audioRef = useRef();
	const buttonRef = useRef();
	const playAudio = useCallback(() => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
		}
	}, [audioRef]);

	const handleKeyDown = useCallback(
		e => {
			if (e.keyCode === keyCode) {
				playAudio();
				setDown(true);
			}
		},
		[keyCode, playAudio]
	);

	const handleKeyUp = useCallback(
		e => {
			if (e.keyCode === keyCode) {
				setDown(false);
			}
		},
		[keyCode]
	);
	useEffect(() => {
		const bRef = buttonRef.current;
		bRef.addEventListener("mousedown", () => {
			playAudio();
			setDown(true);
		});
		bRef.addEventListener("mouseup", () => setDown(false));
		bRef.addEventListener("mouseleave", () => setDown(false));
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			bRef.removeEventListener("mousedown", () => {
				playAudio();
				setDown(true);
			});
			bRef.removeEventListener("mouseup", () => setDown(false));
			bRef.removeEventListener("mouseleave", () => setDown(false));
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [playAudio, setDown, handleKeyDown, handleKeyUp]);

	return [audioRef, buttonRef, down];
}

function DrumPad(props) {
	const { keyCode } = props;
	const [audioRef, buttonRef, down] = useClickKeyAudio(keyCode);
	return (
		<StyledDrumSlot>
			<StyledDrumPad
				id={props.triggerKey}
				color={props.color}
				ref={buttonRef}
				className={down ? "down" : null}
			>
				{props.triggerKey}
				<audio ref={audioRef} src={props.sound} />
			</StyledDrumPad>
		</StyledDrumSlot>
	);
}

export default DrumPad;
