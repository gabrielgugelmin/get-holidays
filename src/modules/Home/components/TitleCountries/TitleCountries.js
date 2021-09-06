import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../../../../components/Title';

function TitleCountries({ country }) {
	const getTitle = (value) =>
		value ? `Feriados em/no(a) ${value}` : 'Feriados';
	const [title, setTitle] = useState(getTitle(country?.value));

	useEffect(() => {
		setTitle(getTitle(country?.value));
	}, [country]);

	return <Title>{title}</Title>;
}

export default TitleCountries;

TitleCountries.propTypes = {
	country: PropTypes.shape({
		key: PropTypes.string,
		value: PropTypes.string,
	}).isRequired,
};
