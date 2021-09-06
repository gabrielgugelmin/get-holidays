import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Holidays from '../../../../data/Holidays';
import Select from '../../../../components/Select';

function SelectCountries({ callback }) {
	const [country, setCountry] = useState({});
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const response = Holidays().getCountries();
		const data = Object.keys(response).map((key) => ({
			key,
			value: response[key],
		}));
		setCountries(data);
	}, []);

	useEffect(() => {
		callback(country);
	}, [country]);

	return (
		<Select
			options={countries}
			callback={(option) => setCountry(option)}
			value={country}
		/>
	);
}

export default SelectCountries;

SelectCountries.defaultProps = {
	callback: () => {},
};

SelectCountries.propTypes = {
	callback: PropTypes.func,
};
