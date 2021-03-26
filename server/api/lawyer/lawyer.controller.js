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

	const response = data.map(({ id, email, phone, ...rest }, idx, array) => {
		if (idx < array.length) {
			const newArray = [...array.slice(0, idx), ...array.slice(idx + 1)];

			const duplicatedUser = newArray.find((item, j, arr) => {
				if (j < arr.length) {
					return (
						email.toLowerCase() === item.email.toLowerCase() ||
						phone.toString().slice(-10) === item.phone.toString().slice(-10)
					);
				}
			});

			return { id, email, phone, ...rest, duplicate_with: duplicatedUser?.id || '-' };
		}
	});

	res.status(200).json(response);
}

module.exports = { handleCSVFile };
