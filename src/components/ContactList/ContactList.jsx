import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contactList }) => {
  return (
    <ul className={s.contactList}>
      {contactList.map((item) => (
        <Contact key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ContactList;
