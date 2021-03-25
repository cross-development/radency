//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TableRow from './TableRow';
//Data
import tableHeaders from 'data/tableHeaders.json';
//Styles
import {} from './LawyerTable.styles';

const LawyerTable = ({ usersData }) => {
	return (
		<div>
			<table className="table-1">
				<caption className="table-title">Users statistics</caption>

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
			</table>
		</div>
	);
};

LawyerTable.propTypes = {};

export default LawyerTable;
