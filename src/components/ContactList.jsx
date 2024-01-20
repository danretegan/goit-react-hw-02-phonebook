// ContactList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.container}>
      <h2 className={styles.title}>Contacts:</h2>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
