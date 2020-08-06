export const axiosErrorHandler = (error) => {
	// console.log('Error', error.message);
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		// console.log(error.response.data);
		// console.log(error.response.status);
		// console.log(error.response.headers);
		throw error.response;
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		// console.log(error.request);
		throw error.request;
	} else {
		// Something happened in setting up the request that triggered an Error
		// console.log('Error', error.message);
		// console.log(error.config);
		throw error.message;
	}
};