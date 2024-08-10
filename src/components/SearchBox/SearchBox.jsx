import s from "./SearchBox.module.css";
const SearchBox = ({ searchStr, setSearchStr }) => {
  return (
    <div className={s.findInputWrapper}>
      <label className={s.findInputLabel}>Find contacts by name</label>
      <input
        className={s.findInput}
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        placeholder="Type name you wish to find "
      ></input>
    </div>
  );
};

export default SearchBox;
