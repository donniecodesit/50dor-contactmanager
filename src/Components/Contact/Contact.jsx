import React, { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

export default function Contact() {
  const [contacts, setContacts] = useState([
    { full_name: "John Doe", phone_number: "5551112222" },
    { full_name: "Mary Weaver", phone_number: "5554442323" },
    { full_name: "Alex Smith", phone_number: "5550101555" },
  ]);
  
  return (
    <div id="container">
      <div id="box">
        <ContactList contacts={contacts} />
        <ContactForm contacts={contacts} addContacts={setContacts} />
      </div>
    </div>
  );
}
