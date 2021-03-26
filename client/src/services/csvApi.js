//Core
import axios from 'axios';

//Axios defaults config
axios.defaults.baseURL = 'https://young-hamlet-11523.herokuapp.com';

const sendCSVToValidate = ({ usersData }) => onSuccess => onError => onFinally => {
	axios
		.post(`/api/lawyer`, { usersData })
		.then(({ data }) => onSuccess([...data]))
		.catch(error => onError(error))
		.finally(() => onFinally(false));
};

const sendErrorReport = error => axios.post(`/api/support`, { error });

const csvAPI = { sendCSVToValidate, sendErrorReport };

export default csvAPI;
