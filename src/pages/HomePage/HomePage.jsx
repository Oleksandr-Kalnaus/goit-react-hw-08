import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { FaUserEdit, FaSearch, FaCloud } from "react-icons/fa";

import css from "./HomePage.module.css";

function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <h1 className={css.welcome}>Welcome to the phonebook application!</h1>
      ) : (
        <div className={css.noname}>Please sign in or create an account</div>
      )}
      <div>
        <p className={css.paragraph}>
          Here's just part of what you can do in this app:
        </p>
        <ul className={css.list}>
          <li>
            <FaUserEdit className={css.icon} />
            Create and edit contacts: You can add new contacts or edit existing
            ones. To edit contacts, the form is automatically filled with data
            from the selected contact.
          </li>
          <li>
            <FaSearch className={css.icon} />
            Search by name and phone number: The user can quickly find a contact
            by name or phone number using an intuitive search field.
          </li>
          <li>
            <FaCloud className={css.icon} />
            Thanks to cloud storage, you can access your contacts from anywhere
            in the world where there is an Internet connection.
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
