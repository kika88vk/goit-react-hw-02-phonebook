import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number }) => {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};

ContactListItem.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
