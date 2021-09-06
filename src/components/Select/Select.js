import PropTypes from 'prop-types';
import { useState } from 'react';

function Select({ options, callback, ...props }) {
	const [currentOption, setCurrentOption] = useState({});

	const handleChange = (e) => {
		const option = {
			name: e.target.name,
			value: e.target.value,
		};
		setCurrentOption(option);

		if (callback) callback(option);
	};

	return (
		<select
			{...props}
			value={currentOption.value}
			defaultValue="default"
			onChange={(e) => handleChange(e)}
		>
			{options?.length > 0 && (
				<>
					<option name="default " key="default" value="default" disabled>
						Selecione um país
					</option>
					{options.map((option) => (
						<option name={option.value} key={option.key}>
							{option.value}
						</option>
					))}
				</>
			)}
		</select>
	);
}

export default Select;

Select.defaultProps = {
	value: PropTypes.shape({
		value: '',
		key: '',
	}),
	callback: () => {},
};

Select.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string,
			value: PropTypes.string,
		})
	).isRequired,
	value: PropTypes.shape({
		key: PropTypes.string,
		value: PropTypes.string,
	}),
	callback: PropTypes.func,
};
