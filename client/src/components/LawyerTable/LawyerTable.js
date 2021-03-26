//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TableRow from './TableRow';
//Data
import tableHeaders from 'data/tableHeaders.json';
//Styles
import { TableContainer, TableTitle, Table } from './LawyerTable.styles';

const LawyerTable = ({ usersData }) => (
	<TableContainer>
		<Table>
			<TableTitle>Lawyer statistics</TableTitle>
			<thead>
				<tr>
					{tableHeaders.map(({ name, label }) => (
						<th key={name}>{label}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{usersData.map((user, idx) => (
					<TableRow key={user.id} user={user} id={idx + 1} />
				))}
			</tbody>
		</Table>
	</TableContainer>
);

LawyerTable.propTypes = {
	usersData: PropTypes.arrayOf(
		PropTypes.shape({
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
	).isRequired,
};

export default LawyerTable;
