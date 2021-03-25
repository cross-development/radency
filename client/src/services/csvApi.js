//Core
import axios from 'axios';

//Axios defaults config
axios.defaults.baseURL = 'http://localhost:8080';

const sendCSVToValidate = ({ usersData }) => onSuccess => onError => onFinally => {
	axios
		.post(`/api/lawyer`, { usersData })
		.then(onSuccess)
		.catch(onError)
		.finally(() => onFinally(false));
};

const sendErrorReport = error => axios.post(`/api/support`, { error });

const csvAPI = { sendCSVToValidate, sendErrorReport };

export default csvAPI;