//Core
import React from 'react';
import PropTypes from 'prop-types';
//Utils
import { validateUser } from 'utils/helpers';
//Styles
import { FullName, Phone, Email, Age, Experience, Income } from './TableRow.styles';
import { Children, ExpDate, LicenseNum } from './TableRow.styles';

const TableRow = ({ user, id }) => {
	const {
		full_name,
		phone,
		email,
		age,
		experience,
		yearly_income,
		has_children,
		license_states,
		expiration_date,
		license_number,
		duplicate_with,
	} = user;

	const {
		isPhoneValid,
		isEmailValid,
		isAgeValid,
		isExpValid,
		isIncomeValid,
		hasChildrenValid,
		isExpDateValid,
		isLicenseNumValid,
	} = validateUser(user);

	return (
		<tr style={{ textAlign: 'center' }}>
			<td>{id}</td>
			<FullName>{full_name}</FullName>
			<Phone isValid={isPhoneValid}>{phone}</Phone>
			<Email isValid={isEmailValid}>{email}</Email>
			<Age isValid={isAgeValid}>{age}</Age>
			<Experience isValid={isExpValid}>{experience}</Experience>
			<Income isValid={isIncomeValid}>{yearly_income}</Income>
			<Children isValid={hasChildrenValid}>{has_children}</Children>
			<td>{license_states}</td>
			<ExpDate isValid={isExpDateValid}>{expiration_date}</ExpDate>
			<LicenseNum isValid={isLicenseNumValid}>{license_number}</LicenseNum>
			<td>{duplicate_with}</td>
		</tr>
	);
};

TableRow.propTypes = {
	id: PropTypes.number.isRequired,
	user: PropTypes.shape({
		id: PropTypes.number.isRequired,
		full_name: PropTypes.string.isRequired,
		phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		email: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		experience: PropTypes.number.isRequired,
		yearly_income: PropTypes.string.isRequired,
		has_children: PropTypes.any,
		license_states: PropTypes.string.isRequired,
		expiration_date: PropTypes.string.isRequired,
		license_number: PropTypes.string.isRequired,
		duplicate_with: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	}).isRequired,
};

export default TableRow;
