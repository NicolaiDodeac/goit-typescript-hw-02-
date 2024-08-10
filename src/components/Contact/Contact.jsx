import { User, Phone, Trash2 } from "lucide-react";
import s from "./Contact.module.css";
const Contact = ({ item, handleDeleteContact }) => {
  return (
    <li className={s.contactItem}>
      <div>
        <p className={s.contactName}>
          <User className={s.contactIcon} size={14} />
          {item.name}
        </p>
        <p className={s.contactName}>
          <Phone className={s.contactIcon} size={14} />
          {item.number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => handleDeleteContact(item.id)}
      >
        <Trash2 className={s.deleteIcon} size={14} /> Delete
      </button>
    </li>
  );
};

export default Contact;
