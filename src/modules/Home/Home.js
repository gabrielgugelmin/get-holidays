import { useState } from 'react';
import ListCountries from './components/ListCountries';
import SelectCountries from './components/SelectCountries';
import TitleCountries from './components/TitleCountries';

function Home() {
	const [country, setCountry] = useState({});

	return (
		<>
			<TitleCountries country={country} />
			<SelectCountries callback={(option) => setCountry(option)} />
			<ListCountries country={country} />
		</>
	);
}

export default Home;
