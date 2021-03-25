//Core
import React from 'react';
import PropTypes from 'prop-types';

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

	return (
		<tr>
			<td>{id}</td>
			<td>{full_name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td>{age}</td>
			<td>{experience}</td>
			<td>{yearly_income}</td>
			<td>{has_children}</td>
			<td>{license_states}</td>
			<td>{expiration_date}</td>
			<td>{license_number}</td>
			<td>{duplicate_with}</td>
		</tr>
	);
};

TableRow.propTypes = {
	id: PropTypes.number.isRequired,
	user: PropTypes.exact({
		full_name: PropTypes.string.isRequired,
		phone: PropTypes.number.isRequired,
		email: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		experience: PropTypes.number.isRequired,
		yearly_income: PropTypes.number.isRequired,
		has_children: PropTypes.bool.isRequired,
		license_states: PropTypes.string.isRequired,
		expiration_date: PropTypes.string.isRequired,
		license_number: PropTypes.string.isRequired,
	}).isRequired,
};

export default TableRow;
