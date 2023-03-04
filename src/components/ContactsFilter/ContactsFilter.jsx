

const ContactsFilter = ({value, onChangeFilter})=>{
    return <>
            <label htmlFor="filter">Find contacts by name</label>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={onChangeFilter}
          value={value}
        /></>
}

export default ContactsFilter;
