import PropTypes from 'prop-types';
import StyledTitle from './styles';

function Title({ children }) {
	return <StyledTitle>{children}</StyledTitle>;
}

export default Title;

Title.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
