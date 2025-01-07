import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { getIconForTitle } from "../utils/utils";
import { useState } from "react";

interface SideBarProps {
  handlePageTitleClick: (pageNumber: number) => void;
  currentPage: number;
}

const SideBar = ({ handlePageTitleClick, currentPage }: SideBarProps) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Commodity", "Employee"].map((title, index) => (
          <ListItem
            key={title}
            onClick={() => handlePageTitleClick(index + 1)}
            sx={{
              backgroundColor:
                currentPage === index + 1 ? "#cbcbcb" : "inherit",
            }}
          >
            <ListItemButton>
              <ListItemIcon>{getIconForTitle(title)}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            marginTop: "64px",
            borderTop: 3,
            borderRight: 3,
            borderColor: "divider",
            backgroundColor: "#faf1f0",
          },
        }}
        open
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
};
export default SideBar;
