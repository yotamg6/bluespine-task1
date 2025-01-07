import * as React from "react";
import Table from "./Table";
import useTableData from "../hooks/useTableData";
import { VisibleColumnsIndexes } from "../types";
import DetailsBox from "./DetailsBox";

const Commodity = () => {
  const visibleColumnsIndexes: VisibleColumnsIndexes = {
    visibleColumnsStart: 0,
    visibleColumnsEnd: 15,
  };
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
    dataSet: "Commodity",
    visibleColumnsIndexes,
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

export default Commodity;
