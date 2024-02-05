import React from 'react';
import { useState } from 'react'
import './App.css';
import ContactList from './components/ContactList.jsx';
import SelectedContact from './components/SelectedContact';


export default function App() {
  // Step 5: Create state variables for selectedContactId and setSelectedContactId
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
     <>
      {/* Step 6: Conditionally render ContactList or SelectedContact based on selectedContactId */}
      {selectedContactId ? (
        // Step 8: Render a div with a message when selectedContactId is truthy
        <SelectedContact />
      ) : (
        // Step 7: Render ContactList when selectedContactId is null (falsey)
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}


