import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("No query was typed.");
import { Search } from "lucide-react";

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (query) {
      onSubmit(query);
      e.target.reset();
    } else {
      notify();
    }
  };

  return (
    <header className={s.header}>
      <form className={s.findInputWrapper} onSubmit={handleFormSubmit}>
        <input
          className={s.findInput}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.searchButton}>
          <Search className={s.searchIcon} />
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
