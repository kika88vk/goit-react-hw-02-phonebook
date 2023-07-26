import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';

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
      <div className={css.container}>
        <h1 className={css.heading}>Phonebook</h1>
        <div>
          <ContactForm submit={this.formAddContact} />
        </div>
        <div>
          <h2 className={css.heading}>Contacts</h2>
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default App;
