//Core
import styled from 'styled-components';

const ErrorWrapper = styled.div`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 1000;
`;

const ErrorWindow = styled.div`
	color: #fff;

	display: block;

	margin: 5rem auto;
	padding: 1rem;

	position: absolute;
	width: 70%;
	text-align: center;
	border-radius: 10px;

	box-shadow: 0 0 8px 0.2px #ff7675;
	background-color: #ee5253;
`;

const CloseBtn = styled.button`
	color: #fff;
	font-size: 18px;
	font-weight: 700;
	line-height: 22px;

	width: 20px;
	height: 20px;

	position: absolute;
	top: 5px;
	right: 5px;

	outline: none;
	border: none;
	border-radius: 6px;
	cursor: pointer;

	background-color: transparent;
`;

const ErrorMessage = styled.p`
	font-size: 1em;
	line-height: 1.25em;
	font-weight: bold;
	text-transform: uppercase;
`;

export { ErrorWrapper, ErrorWindow, ErrorMessage, CloseBtn };
