import { InputBase, styled } from "@mui/material";

export const StyledSearch = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#d3d3d3",
  },
  marginRight: 0,
}));
export const SearchIconWrapper = styled("div")(() => ({
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "4px 0",
  },
}));
