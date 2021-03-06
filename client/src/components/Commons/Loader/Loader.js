//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { LoaderWrapperDiv, beatCss } from './Loader.styles';

const Loader = ({ onLoad }) => (
	<LoaderWrapperDiv>
		<BeatLoader size={30} color="#27ae60" loading={onLoad} css={beatCss} />
	</LoaderWrapperDiv>
);

Loader.propTypes = {
	onLoad: PropTypes.bool,
};

Loader.defaultProps = {
	onLoad: false,
};

export default Loader;
