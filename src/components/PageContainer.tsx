import { useMemo } from "react";
import { getPageByIndex } from "../utils/utils";
import { Page } from "../types/types";
import useTableData from "../hooks/useTableData";
import Table from "./Table";
import DetailsBox from "./DetailsBox";

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
  } = useTableData({
    dataSet: page.dataSet,
    visibleColumnsIndexes: page.visibleColumnsIndexes,
  });
  return (
    <div className="flex flex-col gap-6">
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
    </div>
  );
};
export default PageContainer;
