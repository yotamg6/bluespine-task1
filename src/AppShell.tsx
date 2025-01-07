import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import SideBar from "./SideBar";
import TopPanel from "./TopPanel";
import { useState } from "react";
import PageContainer from "./PageContainer";

const AppShell = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageTitleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Box sx={{ display: "flex" }}>
      {/* //TODO: consider removing cssbaseline */}
      <CssBaseline />
      <TopPanel />
      <SideBar handlePageTitleClick={handlePageTitleClick} />
      <PageContainer currentPage={currentPage} />
    </Box>
  );
};

export default AppShell;
