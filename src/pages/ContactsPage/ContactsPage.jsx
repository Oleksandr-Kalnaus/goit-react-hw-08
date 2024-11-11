import { useEffect, useState, useRef } from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

function ContactsPage() {
  const [isEdit, setIsEdit] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEditContact = (contact) => {
    setContactToEdit(contact);
    setIsEdit(true);
    setIsFormVisible(true);

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
        <div ref={formRef}>
          <ContactForm
            onEdit={isEdit}
            contact={contactToEdit}
            onClose={closeForm}
          />
        </div>
      )}

      <SearchBox />
      <ContactList onEditContact={handleEditContact} />
    </div>
  );
}

export default ContactsPage;
