import React, { useState } from "react";

export default function ContactForm({ contacts, addContacts }) {
  const initialFormData = {
    full_name: "",
    phone_number: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.full_name === "" || formData.phone_number === "")
      alert("Please enter valid information.");
    else addContacts([...contacts, formData]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="full_name"
          type="text"
          placeholder="Enter a full name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="number"
          name="phone_number"
          placeholder="Enter a number"
          max={9999999999}
          onChange={handleChange}
        />
      </div>
      <div id="button">
        <button>Add Contact</button>
      </div>
    </form>
  );
}
