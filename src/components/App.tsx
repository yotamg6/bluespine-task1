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
      <Box
        sx={{
          marginTop: "3rem",
        }}
      >
        <PageContainer pageIndex={currentPageIndex} />
      </Box>
    </Box>
  );
};

export default App;
