// App.jsx
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import styles from './App.module.css';
import { nanoid } from 'nanoid';
import SearchFilter from './SearchFilter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  handleAddContact = () => {
    const { name, number } = this.state;
    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onFormChange={this.handleFormChange}
          onAddContact={this.handleAddContact}
        />
        <h2>Contacts:</h2>
        <SearchFilter filter={filter} onFilterChange={this.handleFormChange} />
        <ContactList
          contacts={filteredContacts}
          onFilterChange={this.handleFormChange}
        />
      </div>
    );
  }
}

export default App;
