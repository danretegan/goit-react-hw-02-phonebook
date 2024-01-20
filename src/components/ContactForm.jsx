import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  render() {
    const { name, onNameChange, onAddContact } = this.props;

    return (
      <form className={styles.container}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onNameChange}
          />
        </label>

        <Button type="button" action={onAddContact}>
          Add contact
        </Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
