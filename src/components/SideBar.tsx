import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { pages } from "../settings/pageEntities";

interface SideBarProps {
  handlePageTitleClick: (pageNumber: number) => void;
  currentPageIndex: number;
}

const SideBar = ({ handlePageTitleClick, currentPageIndex }: SideBarProps) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {pages.map((page, index) => (
          <ListItem
            key={index}
            onClick={() => handlePageTitleClick(index)}
            sx={{
              backgroundColor:
                currentPageIndex === index ? "#cbcbcb" : "inherit",
            }}
          >
            <ListItemButton>
              <ListItemIcon>{page.sideBarIcon}</ListItemIcon>
              <ListItemText primary={page.title} />
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
