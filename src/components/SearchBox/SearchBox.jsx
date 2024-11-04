import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.form}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        className={styles.field}
        type="text"
        name="search"
        id="search"
        placeholder="Search by name"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
