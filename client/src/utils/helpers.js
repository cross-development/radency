const validateUser = user => {
	const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const isEmailValid = emailRegExp.test(user.email);

	const licenseNumRegExp = /^[a-zA-Z\d]{6}$/;
	const isLicenseNumValid = licenseNumRegExp.test(user.license_number);

	const age = Number(user.age);
	const isAgeValid = age >= 21;

	const income = Number(user.yearly_income);
	const isIncomeValid = income <= 1000000 && income >= 0;

	const experience = Number(user.experience);
	const isExpValid = experience <= age - 21 && experience >= 0;

	const isTypeOfBoolean = typeof user.has_children === 'boolean';
	const stringifyChildrenValue = user.has_children.toString().toUpperCase();
	const hasChildrenValid = isTypeOfBoolean && stringifyChildrenValue;

	const currentDate = Date.now();
	const expDate = Date.parse(user.expiration_date);
	const isExpDateValid = expDate && expDate > currentDate;

	const phoneRegExp = /^\+1/;
	const isPhoneValid = phoneRegExp.test(user.phone);

	return {
		isExpValid,
		isAgeValid,
		isPhoneValid,
		isEmailValid,
		isIncomeValid,
		isExpDateValid,
		hasChildrenValid,
		isLicenseNumValid,
	};
};

export { validateUser };
