import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          item={item}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
