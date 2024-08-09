import { User, Phone, Trash2 } from "lucide-react";
import s from "./Contact.module.css";
const Contact = ({ item }) => {
  return (
    <li className={s.contactItem}>
      <div>
        <p className={s.contactName}>
          <User className={s.contactIcon} />
          {item.name}
        </p>
        <p className={s.contactName}>
          <Phone className={s.contactIcon} />
          {item.number}
        </p>
      </div>
      <button className={s.deleteButton} onClick={() => onDelete(item.id)}>
        <Trash2 className={s.deleteIcon} /> Delete
      </button>
    </li>
  );
};

export default Contact;
