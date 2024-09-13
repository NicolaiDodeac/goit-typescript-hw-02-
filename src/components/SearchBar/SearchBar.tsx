import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("No query was typed.");
import { Search } from "lucide-react";
import { ChangeEvent } from "react";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (
      e.currentTarget.elements.namedItem("query") as HTMLInputElement
    ).value.trim();
    if (query) {
      onSubmit(query);
      e.currentTarget.reset();
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
