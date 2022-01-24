import { SearchForm, SearchInput } from "../styles/styled";
import PropTypes from "prop-types";

export default function SearchBar({ onSubmit, query, setQuery }) {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        name="query"
        type="search"
        autoComplete="on"
        autoFocus
        placeholder="Please enter movie name.."
      />
    </SearchForm>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
