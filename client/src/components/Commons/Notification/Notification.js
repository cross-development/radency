//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { ErrorWrapper, ErrorWindow, CloseBtn, ErrorMessage } from './Notification.styles';

const Notification = ({ message, onCloseNotification }) => (
	<ErrorWrapper>
		<ErrorWindow>
			<CloseBtn type="button" onClick={onCloseNotification}>
				&#10005;
			</CloseBtn>

			<ErrorMessage>{message}</ErrorMessage>
		</ErrorWindow>
	</ErrorWrapper>
);

Notification.propTypes = {
	message: PropTypes.string.isRequired,
	onCloseNotification: PropTypes.func.isRequired,
};

export default Notification;
