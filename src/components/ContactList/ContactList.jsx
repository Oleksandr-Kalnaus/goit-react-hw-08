import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contacts/operations";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = ({ onEditContact }) => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const openDeleteModal = (contactId) => {
    setContactToDelete(contactId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setContactToDelete(null);
  };

  const confirmDeleteContact = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      closeDeleteModal();
    }
  };

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.length === 0 ? (
          <p>No contacts available...</p>
        ) : (
          filteredContacts.map((contact) => (
            <li key={contact.id} className={css.contactItem}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => openDeleteModal(contact.id)}
                onEdit={() => onEditContact(contact)}
              />
            </li>
          ))
        )}
      </ul>

      {isDeleteModalOpen && (
        <ModalWrapper
          isOpen={isDeleteModalOpen}
          onRequestClose={closeDeleteModal}
        >
          <div className={css.deleteModalContent}>
            <p>Are you sure you want to delete this contact?</p>
            <button
              onClick={confirmDeleteContact}
              className={css.deleteConfirmBtn}
            >
              Yes
            </button>
            <button onClick={closeDeleteModal} className={css.deleteCancelBtn}>
              Cancel
            </button>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default ContactList;
