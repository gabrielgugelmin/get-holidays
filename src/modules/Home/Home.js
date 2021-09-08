import { useState } from 'react';
import Container from './components/Container';
import ListCountries from './components/ListCountries';
import SelectCountries from './components/SelectCountries';
import TitleCountries from './components/TitleCountries';

function Home() {
	const [country, setCountry] = useState({});

	return (
		<Container>
			<TitleCountries country={country} />
			<SelectCountries callback={(option) => setCountry(option)} />
			<ListCountries country={country} />
		</Container>
	);
}

export default Home;
