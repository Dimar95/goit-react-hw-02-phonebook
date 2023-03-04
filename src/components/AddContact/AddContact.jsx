import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    number: '',
    name: '',
  };
  onChangeName = e => {
    this.setState(prevState => {
      return (prevState.name = e.target.value);
    });
  };

  onChangeNumber = e => {
    this.setState(prevState => {
      return (prevState.number = e.target.value);
    });
  };
  render() {
    return (
      <>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onAddContact(this.state);
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            onChange={this.onChangeName}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <input
            onChange={this.onChangeNumber}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
export default AddContact;
