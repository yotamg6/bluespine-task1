import { useCallback, useMemo } from "react";
import { getPageByIndex } from "../utils/utils";
import { Page } from "../types/types";
import useTableData from "../hooks/useTableData";
import Table from "./Table";
import DetailsBox from "./DetailsBox";
import { Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

interface PageContainerProps {
  pageIndex: number;
}
const PageContainer = ({ pageIndex }: PageContainerProps) => {
  const page: Page = useMemo(() => getPageByIndex(pageIndex), [pageIndex]);

  const {
    paginatedData,
    loading,
    totalRows,
    handlePaginationModelChange,
    paginationModel,
    visibleColumns,
    handleRowClick,
    hiddenFieldsRow,
    showDetails,
    setShowDetails,
    handleSearchBarChange,
  } = useTableData({
    dataSet: page.dataSet,
    visibleColumnsIndexes: page.visibleColumnsIndexes,
  });

  return (
    <Stack>
      <Stack //TODO: export styling to styling file and pass as className
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="5.5rem"
        sx={{
          pt: 2,
          pl: 3,
          pr: 20,
          backgroundColor: "#faf1f0",
        }}
      >
        <Typography variant="h3">{page.title}</Typography>
        <SearchBar handleSearchBarChange={handleSearchBarChange} />
      </Stack>
      <Table
        data={paginatedData}
        isLoading={loading}
        handlePaginationModelChange={handlePaginationModelChange}
        paginationModel={paginationModel}
        totalRows={totalRows}
        visibleColumns={visibleColumns}
        handleRowClick={handleRowClick}
        showDetails={showDetails}
      />
      {showDetails && hiddenFieldsRow && (
        <DetailsBox data={hiddenFieldsRow} setShowDetails={setShowDetails} />
      )}
    </Stack>
  );
};
export default PageContainer;
