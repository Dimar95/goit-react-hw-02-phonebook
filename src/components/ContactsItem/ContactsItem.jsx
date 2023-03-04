import PropTypes from 'prop-types';


const ContactsItem = ({name, number})=>{
    return       <li>
    {name} {number}
  </li>
}


export default ContactsItem;

ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}