import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledSearch,
} from "../styles/styles";

interface SearchBarProps {
  handleSearchBarChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const SearchBar = ({ handleSearchBarChange }: SearchBarProps) => {
  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => handleSearchBarChange(e)}
      />
    </StyledSearch>
  );
};

export default SearchBar;
