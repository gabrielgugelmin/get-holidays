import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HolidaysService from '../../../../data/Holidays';
import Item from './components/Item'
import { Wrapper } from './styles';

function ListCountries({ country }) {
	const [holidays, setHolidays] = useState([])
	useEffect(() => {
		const hd = HolidaysService(country?.key);
		setHolidays(hd.getHolidays(new Date().getFullYear()));
	}, [country]);

	return (
		<Wrapper>
			{holidays.map((holiday) => (
				<Item name={holiday.name} date={holiday.date} key={holiday.name} />
			))}
		</Wrapper>
	);
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
