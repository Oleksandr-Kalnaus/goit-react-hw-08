import { useState } from "react";
import ContactList from "./../../components/ContactList/ContactList";
import ContactForm from "./../../components/ContactForm/ContactForm";
import SearchBox from "./../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  const [isEdit, setIsEdit] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleEditContact = (contact) => {
    setContactToEdit(contact);
    setIsEdit(true);
    setIsFormVisible(true);
  };

  const handleCreateNewContact = () => {
    setContactToEdit(null);
    setIsEdit(false);
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className={css.contactPage}>
      {isFormVisible ? (
        <button onClick={closeForm} className={css.openCloseBtn}>
          Close form
        </button>
      ) : (
        <button onClick={handleCreateNewContact} className={css.openCloseBtn}>
          Open form
        </button>
      )}

      {isFormVisible && (
        <ContactForm
          onEdit={isEdit}
          contact={contactToEdit}
          onClose={closeForm}
        />
      )}

      <SearchBox />
      <ContactList onEditContact={handleEditContact} />
    </div>
  );
}

export default ContactsPage;
