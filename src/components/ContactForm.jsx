import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddButtonClick = () => {
    const { name, number } = this.state;
    const { onAddContact, contacts } = this.props;

    // Verificăm dacă numele sau numărul există deja în lista de contacte:
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const numberExists = contacts.some(contact => contact.number === number);

    if (nameExists) {
      alert(`${name} is already in contacts!`);
    } else if (numberExists) {
      alert(`${number} is already in contacts!`);
    } else if (name.trim() !== '' && number.trim() !== '') {
      // Adăugăm contactul doar dacă nu există și câmpurile nu sunt goale:
      onAddContact(name, number);
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.container}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            required
            value={name}
            onChange={this.handleFormChange}
          />
        </label>

        <label className={styles.label}>
          Number:
          <input
            className={styles.input}
            type="tel"
            name="number"
            required
            value={number}
            onChange={this.handleFormChange}
          />
        </label>

        <Button type="button" action={this.handleAddButtonClick}>
          Add contact
        </Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
