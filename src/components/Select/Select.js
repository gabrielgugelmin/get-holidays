import { useState } from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './styles';

function Select({ options, callback, ...props }) {
	const [currentOption, setCurrentOption] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		const { selectedIndex } = e.target.options;
		const key = e.target.options[selectedIndex].getAttribute('data-key');
		const option = {
			key,
			value
		}

		setCurrentOption(option);
		if (callback) callback(option);
	};

	return (
		<StyledSelect
			{...props}
			value={currentOption.value}
			onChange={(e) => handleChange(e)}
		>
			{options?.length > 0 && (
				<>
					<option name="default " key="default" value="default" disabled>
						Selecione um país
					</option>
					{options.map((option) => (
						<option value={option.value} key={option.key} data-key={option.key}>
							{option.value}
						</option>
					))}
				</>
			)}
		</StyledSelect>
	);
}

export default Select;

Select.defaultProps = {
	value: PropTypes.shape({
		value: '',
		key: '',
	}),
	callback: () => { },
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
