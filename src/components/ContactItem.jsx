import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import Button from './Button';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <li className={styles.item}>
        {contact.name}: {contact.number}
      </li>
      <Button action={() => onDeleteContact(contact.id)}>Delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
