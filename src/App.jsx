import React from "react";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  filterContacts,
} from "./redux/contactsSlice";
import Filter from "./components/Filter";
import "./App.css";

const App = (props) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name: { value: name },
      number: { value: number },
    } = e.currentTarget.elements;
    console.log(name, number);
    const contact = { id: nanoid(), name: name, number: number };
    const foundContant = contacts.find((contact) => contact.name === name);
    const alertMessage = name + " is already in contacts.";
    if (foundContant) {
      return alert(alertMessage);
    } else {
      dispatch(addContact(contact));
    }
  };

  const handleDeleteButton = (key) => {
    dispatch(deleteContact(key));
  };
  return (
    <div>
      <ContactForm handleSubmit={handleSubmit} />
      <Filter />
      <ContactList
        contactList={contacts}
        filterInputValue={filter}
        onClick={handleDeleteButton}
      />
    </div>
  );
};

export default App;
