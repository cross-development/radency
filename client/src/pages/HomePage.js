//Core
import React, { useState } from 'react';
//Components
import ButtonImport from 'components/ButtonImport';
import LawyerTable from 'components/LawyerTable';
import ModalWindow from 'components/ModalWindow';
import { Notification, Loader } from 'components/Commons';
//Services
import csvApi from 'services/csvApi';

const HomePage = () => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(prevState => !prevState);

	const handleCloseNotification = () => {
		csvApi.sendErrorReport(error);
		setError(null);
	};

	const checkHeaders = ({ usersData }) => {
		return usersData.every(({ full_name, email, phone }) => full_name && email && phone);
	};

	const handleSubmit = ({ usersData, fileInfo }) => {
		if (fileInfo.name.substr(-3) !== 'csv') {
			setError({ message: 'File format is not correct' });
			return;
		}

		const isHeadersValid = checkHeaders({ usersData });

		if (!isHeadersValid) {
			setError({ message: 'File format is not correct' });
			return;
		}

		setIsLoading(true);
		csvApi.sendCSVToValidate({ usersData })(setUsers)(setError)(setIsLoading);
	};

	return (
		<>
			<ButtonImport onOpenModal={handleOpenModal} />

			{users.length > 0 && <LawyerTable usersData={users} />}

			{isModalOpen && <ModalWindow onOpenModal={handleOpenModal} onSubmit={handleSubmit} />}

			{error && (
				<Notification
					message="File format is not correct"
					onCloseNotification={handleCloseNotification}
				/>
			)}

			{isLoading && <Loader onLoad={isLoading} />}
		</>
	);
};

export default HomePage;
