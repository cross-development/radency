//Core
import styled from 'styled-components';

const ModalWrapper = styled.div`
	margin: 0 auto;

	width: 20%;
	border-radius: 10px;
	position: relative;

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
		background-color: ${({ isAccepted }) => (isAccepted ? '#507bfc' : 'transparent')};
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
		color: ${({ isAccepted }) => (isAccepted ? '#ffffff' : '#98a0a6')};
		cursor: pointer;
		box-shadow: ${({ isAccepted }) =>
			isAccepted ? '0px 0px 20px 5px rgba(80, 123, 252, 0.8)' : '0px 0px 2px 0px #707070'};
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
	color: #2d3436;
	text-align: center;
`;

export { ModalWrapper, InputWrapper, CloseBtn, Label };
