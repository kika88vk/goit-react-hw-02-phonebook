import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <ContactForm submit={this.formSubmitHandler} />
          {/* <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form> */}
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>{this.state.contacts}</ul>
        </div>
      </div>
    );
  }
}

export default App;
