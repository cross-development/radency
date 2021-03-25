//Core
import styled from 'styled-components';

const ButtonWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	padding: 0 5rem;
`;

const Button = styled.button`
	color: #ffffff;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;

	outline: none;
	border: none;
	width: 176px;
	height: 44px;
	cursor: pointer;
	text-align: center;
	border-radius: 10px;
	transition: all 250ms linear;

	background: #27ae60;

	&:hover {
		box-shadow: 0px 4px 10px rgba(46, 204, 113, 0.5);
	}
`;

export { ButtonWrap, Button };
