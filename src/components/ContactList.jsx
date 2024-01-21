import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <div className={styles.container}>
      <ul>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
