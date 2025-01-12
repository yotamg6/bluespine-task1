import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";

interface SearchBarProps {
  handleSearchBarChange: (
    // event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // event: React.FormEvent<HTMLDivElement>
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const StyledSearch = styled("div")(({ theme }) => ({
  //TODO: move these to styling file
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#d3d3d3",
  },
  marginRight: 0,
}));
const SearchIconWrapper = styled("div")(() => ({
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    padding: "4px 0",
  },
}));

const SearchBar = ({ handleSearchBarChange }: SearchBarProps) => {
  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchBarChange(e);
          }
        }}
      />
    </StyledSearch>
  );
};

export default SearchBar;
