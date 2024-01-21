import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onFilterChange } = this.props;

    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <h2 className={styles.title}>Contacts:</h2>
          <label className={styles.label}>
            Find contact by name:
            <input
              className={styles.input}
              type="text"
              name="filter"
              value={this.props.filter}
              onInput={onFilterChange}
            />
          </label>
        </form>

        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ContactList;
