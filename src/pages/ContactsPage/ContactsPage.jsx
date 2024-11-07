import ContactList from "./../../components/ContactList/ContactList";
import ContactForm from "./../../components/ContactForm/ContactForm";
import SearchBox from "./../../components/SearchBox/SearchBox";

function ContactsPage() {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default ContactsPage;
