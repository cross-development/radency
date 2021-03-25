async function handleCSVFile(req, res) {
	const { usersData } = req.body;

	const data = usersData.map((user, idx) => {
		const { age, experience, yearly_income, license_states, has_children, ...rest } = user;

		return {
			id: idx + 1,
			age: parseInt(age),
			experience: parseInt(experience),
			yearly_income: parseFloat(yearly_income).toFixed(2),
			license_states: license_states.split('|').join(', '),
			has_children: has_children === null ? false : has_children,
			...rest,
		};
	});

	const response = data.map(({ id, email, phone, ...rest }, idx) => {
		

		return { id, email, phone, ...rest, duplicate_with: duplicatedUser?.id || '' };
	});

	console.log('response', response);
}

module.exports = { handleCSVFile };
