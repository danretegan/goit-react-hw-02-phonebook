// App.jsx
import React from 'react';
import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import styles from './App.module.css';
import { nanoid } from 'nanoid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleAddContact = () => {
    const { name } = this.state;
    if (name.trim() !== '') {
      console.log('The unique ID is:', nanoid());
      const newContact = {
        id: nanoid(),
        name: name.trim(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
      }));
    }
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          onNameChange={this.handleNameChange}
          onAddContact={this.handleAddContact}
        />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
