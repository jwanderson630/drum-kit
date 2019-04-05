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
    font-size: 45px;
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
	@media (min-width: 720px) {
		font-size: 60px;
	}
`;

function useClickKeyAudio(keyCode) {
	const [down, setDown] = useState(false);
	const audioRef = useRef();
	const buttonRef = useRef();
	const played = useRef(false);
	const playAudio = useCallback(() => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
		}
	}, [audioRef]);

	const handleDown = useCallback(
		e => {
			e.preventDefault();
			if (e.keyCode === keyCode || e.target === buttonRef.current) {
				if (!played.current) {
					playAudio();
					setDown(true);
					played.current = true;
				}
			}
		},
		[keyCode, playAudio]
	);

	const handleUp = useCallback(
		e => {
			e.preventDefault();
			if (e.keyCode === keyCode || e.target === buttonRef.current) {
				setDown(false);
				played.current = false;
			}
		},
		[keyCode]
	);
	useEffect(() => {
		const bRef = buttonRef.current;
		bRef.addEventListener("mousedown", handleDown);
		bRef.addEventListener("touchstart", handleDown);
		bRef.addEventListener("touchend", handleUp);
		bRef.addEventListener("mouseup", handleUp);
		bRef.addEventListener("mouseleave", handleUp);
		window.addEventListener("keydown", handleDown);
		window.addEventListener("keyup", handleUp);
		return () => {
			bRef.removeEventListener("mousedown", handleDown);
			bRef.removeEventListener("touchstart", handleDown);
			bRef.removeEventListener("touchend", handleUp);
			bRef.removeEventListener("mouseup", handleUp);
			bRef.removeEventListener("mouseleave", handleUp);
			window.removeEventListener("keydown", handleDown);
			window.removeEventListener("keyup", handleUp);
		};
	}, [handleDown, handleUp, playAudio, setDown]);

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
