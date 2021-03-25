//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { ButtonWrap, Button } from './ButtonImport.styles';

const ButtonImport = ({ onOpenModal }) => (
	<ButtonWrap>
		<Button type="button" onClick={onOpenModal}>
			Import users
		</Button>
	</ButtonWrap>
);

ButtonImport.propTypes = {
	onOpenModal: PropTypes.func.isRequired,
};

export default ButtonImport;
