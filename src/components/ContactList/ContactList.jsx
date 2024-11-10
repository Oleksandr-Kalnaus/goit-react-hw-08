import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contacts/operations";
import ContactForm from "../ContactForm/ContactForm";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [contactToDelete, setContactToDelete] = useState(null);

  const closeModal = () => {
    setModalOpen(false);
    setEditingContact(null);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setContactToDelete(null);
  };

  const handleDeleteContact = (contactId) => {
    setContactToDelete(contactId);
    setDeleteModalOpen(true);
  };

  const confirmDeleteContact = () => {
    dispatch(deleteContact(contactToDelete));
    closeDeleteModal();
  };

  const handleEditContact = (contactId) => {
    const contact = filteredContacts.find(
      (contact) => contact.id === contactId
    );
    setEditingContact(contact);
    setModalOpen(true);
  };

  return (
    <div>
      {editingContact ? (
        <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
          <ContactForm contact={editingContact} onEdit={true} />
        </ModalWrapper>
      ) : (
        <ul className={styles.contactList}>
          {filteredContacts.length === 0 ? (
            <p>No contacts available...</p>
          ) : (
            filteredContacts.map((contact) => (
              <li key={contact.id} className={styles.contactItem}>
                <Contact
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  onDelete={() => handleDeleteContact(contact.id)}
                  onEdit={handleEditContact}
                />
              </li>
            ))
          )}
        </ul>
      )}
      {isDeleteModalOpen && (
        <ModalWrapper
          isOpen={isDeleteModalOpen}
          onRequestClose={closeDeleteModal}
        >
          <div className={styles.deleteModalContent}>
            <p>Are you sure you want to delete this contact?</p>
            <button
              onClick={confirmDeleteContact}
              className={styles.deleteConfirmBtn}
            >
              Yes
            </button>
            <button
              onClick={closeDeleteModal}
              className={styles.deleteCancelBtn}
            >
              Cancel
            </button>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default ContactList;
