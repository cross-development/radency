//Core
import styled from 'styled-components';

const ModalWrapper = styled.div`
	background: rgba(255, 255, 255, 0.6);
	backdrop-filter: blur(8px);

	width: 310px;
	border-radius: 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	align-items: center;
	justify-content: center;

	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
`;

const CloseBtn = styled.button`
	font-size: 18px;
	line-height: 22px;
	font-weight: 300;

	width: 20px;
	height: 20px;

	position: absolute;
	top: 10px;
	right: 10px;

	outline: none;
	border: none;
	border-radius: 6px;
	cursor: pointer;

	background-color: transparent;
`;

const InputWrapper = styled.div`
	padding: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	& label {
		width: 70px;
		height: 70px;
		margin-bottom: 2rem;
		border-radius: 50px;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
		color: #98a0a6;
		cursor: pointer;
		box-shadow: 0px 0px 4px 1px #000000;
	}

	& input {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}
`;

const Label = styled.p`
	color: #000000;
	text-align: center;
`;

export { ModalWrapper, InputWrapper, CloseBtn, Label };
