//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import CSVReader from 'react-csv-reader';
//Styles
import { GrDocumentCsv } from 'react-icons/gr';
import { ModalWrapper, InputWrapper, CloseBtn, Label } from './ModalWindow.styles';

const papaparseOptions = {
	header: true,
	dynamicTyping: true,
	skipEmptyLines: true,
	transformHeader: header => header.toLowerCase().replace(/\W/g, '_'),
};

const ModalWindow = ({ onSubmit, onOpenModal }) => {
	const handleSubmit = (data, fileInfo) => {
		onSubmit({ usersData: data, fileInfo });
		onOpenModal();
	};

	return (
		<ModalWrapper>
			<CloseBtn type="button" onClick={onOpenModal}>
				&#10005;
			</CloseBtn>

			<InputWrapper>
				<CSVReader
					isAccepted={true}
					label={<GrDocumentCsv />}
					accept=".csv, text/csv"
					cssClass="react-csv-input"
					cssLabelClass="csv-label"
					onFileLoaded={handleSubmit}
					parserOptions={papaparseOptions}
				/>

				<Label>Please select CSV file with user data.</Label>
			</InputWrapper>
		</ModalWrapper>
	);
};

ModalWindow.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onOpenModal: PropTypes.func.isRequired,
};

export default ModalWindow;
