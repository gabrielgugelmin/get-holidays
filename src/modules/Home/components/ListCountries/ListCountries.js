import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Holidays from '../../../../data/Holidays';

function ListCountries({ country }) {
	useEffect(() => {
		const hd = Holidays(country?.key);

		console.log(hd.getHolidays(new Date().getFullYear()));
	}, [country]);

	return <p>{country.value}</p>;
}

export default ListCountries;

ListCountries.defaultProps = {
	country: {
		key: '',
		value: '',
	},
};

ListCountries.propTypes = {
	country: PropTypes.shape({
		key: PropTypes.string,
		value: PropTypes.string,
	}),
};
