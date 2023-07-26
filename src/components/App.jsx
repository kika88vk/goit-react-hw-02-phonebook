import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formAddContact = data => {
    const contact = {
      id: nanoid(10),
      name: data.name,
      number: data.number,
    };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <ContactForm submit={this.formAddContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default App;
