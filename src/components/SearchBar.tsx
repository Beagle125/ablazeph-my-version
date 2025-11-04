import { FiSearch } from "react-icons/fi";

interface Props {
  searchText: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ searchText, onChange }: Props) => {
  return (
    <div className="flex align-center gap--md search__bar">
      <span className="search__icon">
        <FiSearch />
      </span>
      <input
        type="number"
        value={searchText}
        placeholder="Search by year"
        className="search__input"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
