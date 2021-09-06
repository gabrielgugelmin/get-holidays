import PropTypes from 'prop-types';

function Title({ children }) {
	return <h1>{children}</h1>;
}

export default Title;

Title.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
