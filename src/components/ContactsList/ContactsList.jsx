import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem/ContactsItem';
const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
