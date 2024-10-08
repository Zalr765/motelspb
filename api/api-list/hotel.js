const reservation =
{
    reservation: async (value) => {
        return await useRequest('/api1_1.php', {
			method: 'POST',
			body: value,
		});
    }
}

export default reservation