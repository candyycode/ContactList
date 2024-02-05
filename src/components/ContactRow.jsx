import React from 'react';
import PropTypes from 'prop-types';

export default function ContactRow({ setSelectedContactId, contact }) {
    return (
        
      <tr
            onClick={() => {
                setSelectedContactId(contact.id);
            }}
         >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
        // Step 11: Add PropTypes validation
    ContactRow.propTypes = {
        setSelectedContactId: PropTypes.func.isRequired,
        contact: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
         }).isRequired,
     };
  