import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number }) => {
  return (
    <li key={id} className={css.contact_item}>
      <p className={css.contact}>
        {name}: <span>{number}</span>
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
