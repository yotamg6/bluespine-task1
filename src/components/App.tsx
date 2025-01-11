import { Box } from "@mui/material";
import SideBar from "./SideBar";
import TopPanel from "./TopPanel";
import { useEffect, useState } from "react";
import PageContainer from "./PageContainer";

const App = () => {
  const [currentPageIndex, setCurrentPageIndedx] = useState(0);
  const handlePageTitleClick = (pageNumber: number) => {
    setCurrentPageIndedx(pageNumber);
  };

  useEffect(() => {
    document.title = "Bluespine - Task-1";
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <TopPanel />
      <SideBar
        handlePageTitleClick={handlePageTitleClick}
        currentPageIndex={currentPageIndex}
      />
      <PageContainer pageIndex={currentPageIndex} />
    </Box>
  );
};

export default App;
