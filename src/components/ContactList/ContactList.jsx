import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
