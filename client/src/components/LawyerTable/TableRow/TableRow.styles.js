//Core
import styled from 'styled-components';

const TableData = styled.td`
	color: ${({ isValid }) => !isValid && '#ffffff'};
	background-color: ${({ isValid }) => !isValid && '#ee5253'};
`;

const FullName = styled.td`
	text-align: left;
`;

const Phone = styled(TableData)``;

const Email = styled(TableData)``;

const Age = styled(TableData)``;

const Experience = styled(TableData)``;

const Income = styled(TableData)``;

const Children = styled(TableData)`
	&::before {
		content: '${({ isValid }) => (!isValid ? '' : `${isValid}`)}';
	}
`;

const ExpDate = styled(TableData)``;

const LicenseNum = styled(TableData)``;

export { FullName, Phone, Email, Age, Experience, Income, Children, ExpDate, LicenseNum };
