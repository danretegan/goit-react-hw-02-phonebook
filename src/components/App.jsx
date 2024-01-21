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
      number: '',
    };
  }

  handleAddContact = () => {
    const { name } = this.state;
    const { number } = this.state;
    if ((name.trim() !== '') & (number.trim() !== '')) {
      console.log('The unique ID is:', nanoid());
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
    const { contacts, name, number } = this.state;

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onFormChange={this.handleFormChange}
          onAddContact={this.handleAddContact}
        />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
