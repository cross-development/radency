//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { ErrorWrapper, CloseBtn, ErrorMessage } from './Notification.styles';

const Notification = ({ message, onCloseNotification }) => (
	<ErrorWrapper>
		<CloseBtn type="button" onClick={onCloseNotification}>
			&#10005;
		</CloseBtn>

		<ErrorMessage>{message}</ErrorMessage>
	</ErrorWrapper>
);

Notification.propTypes = {
	message: PropTypes.string.isRequired,
	onCloseNotification: PropTypes.func.isRequired,
};

export default Notification;
