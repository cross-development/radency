import styled from 'styled-components';
import { css } from '@emotion/core';

export const LoaderWrapperDiv = styled.div`
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

export const beatCss = css`
	display: block;
	margin: calc(100vh * 0.4) auto;
`;
