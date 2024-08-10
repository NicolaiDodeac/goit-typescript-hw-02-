import { useEffect, useState } from "react";
import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

const initialValues = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contactList, setContactList] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("contactList")) ?? initialValues
  );

  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  const filteredData = contactList.filter((item) =>
    item.name.toLowerCase().includes(searchStr.toLowerCase())
  );
  const handleAddContact = (contact) => {
    setContactList((prev) => [...prev, { ...contact, id: nanoid() }]);
  };

  const handleDeleteContact = (id) => {
    setContactList((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox searchStr={searchStr} setSearchStr={setSearchStr} />
      <ContactList
        contacts={filteredData}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
