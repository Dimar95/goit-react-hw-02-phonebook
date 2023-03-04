import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContact from './AddContact/AddContact';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = ({ name, number }) => {
    this.setState(() => {
      if (this.state.contacts.find(obj => obj.name === name)) {
        alert(`${name} is already in contacts.`)
        return
      }
      return this.state.contacts.push({
        name: name,
        id: nanoid(),
        number: number,
      });
    });
  };

  onChangeFilter = e => {
    this.setState(prevState => {
      return (prevState.filter = e.target.value);
    });
  };

  onFilterContacts = arrayContacts => {
    if (this.state.filter !== '') {
      return arrayContacts.filter(({ name }) =>
        name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return arrayContacts;
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContact onAddContact={this.onAddContact} />
        <h2>Contacts:</h2>
        <ContactsFilter value={this.state.filter} onChangeFilter={this.onChangeFilter}/>
        <ContactsList contacts={this.onFilterContacts(this.state.contacts)} />
      </div>
    );
  }
}

export default App;
