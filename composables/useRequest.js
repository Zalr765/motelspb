export const useRequest = (request, opts = {}) => {
	const config = useRuntimeConfig();

	const options = {
		baseURL: 'http://5.17.30.142:8095/WebBook/',
		...opts,
	};

	return $fetch(request, options);
};