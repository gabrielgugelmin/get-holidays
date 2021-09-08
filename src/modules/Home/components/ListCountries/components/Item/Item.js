import PropTypes from 'prop-types';
import { Item as StyledItem, Title } from './styles';
import { formatDate, getWeekDay } from '../../../../../../utils/date';

function Item({ name, date }) {
  return (
    <StyledItem>
      <Title>{name}</Title>
      <Title>{formatDate(date)} - {getWeekDay(date)}</Title>
    </StyledItem>
  );
}

export default Item;

Item.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}