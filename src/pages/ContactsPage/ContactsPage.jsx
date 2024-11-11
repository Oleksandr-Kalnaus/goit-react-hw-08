import { useState } from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
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
    setContactToEdit(null);
  };

  return (
    <div className={css.contactPage}>
      <button
        onClick={isFormVisible ? closeForm : handleCreateNewContact}
        className={css.openCloseBtn}
      >
        {isFormVisible ? "Close form" : "Open form"}
      </button>

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
