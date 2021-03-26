//Core
import styled from 'styled-components';

const TableContainer = styled.div`
	margin-top: 2rem;
`;

const TableTitle = styled.caption`
	font-size: 22px;
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 0.5rem;
`;

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;

	& thead {
		& tr th {
			background: #74b9ff;
			padding: 0.8rem 0.5rem;
			font-size: 14px;

			&:first-child {
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
			}

			&:last-child {
				border-top-right-radius: 10px;
				border-bottom-right-radius: 10px;
			}
		}
	}

	& tbody {
		& tr {
			transition: all 250ms linear;
			font-size: 14px;

			& td {
				padding: 0.8rem;
				/* padding-top: 0.8rem;
				padding-bottom: 0.8rem; */
			}

			&:not(:first-child) {
				border-top: 1px solid #d1d1d1;
			}
		}
	}
`;

export { TableContainer, TableTitle, Table };
