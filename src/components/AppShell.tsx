import { Box } from "@mui/material";
import SideBar from "./SideBar";
import TopPanel from "./TopPanel";
import { useEffect, useState } from "react";
import PageContainer from "./PageContainer";

const AppShell = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageTitleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    document.title = "Bluespine - Task-1";
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <TopPanel />
      <SideBar
        handlePageTitleClick={handlePageTitleClick}
        currentPage={currentPage}
      />
      <PageContainer currentPage={currentPage} />
    </Box>
  );
};

export default AppShell;
