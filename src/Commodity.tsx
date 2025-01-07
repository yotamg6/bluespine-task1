import * as React from "react";
import Table from "./Table";
import usePaginatedData from "./usePaginatedData";
import { VisibleColumnsIndexes } from "./types";
import DetailsBox from "./DetailsBox";

const Commodity = () => {
  const visibleColumnsIndexes: VisibleColumnsIndexes = {
    visibleColumnsStart: 0,
    visibleColumnsEnd: 15,
  };
  const {
    paginatedData,
    loading,
    initialState,
    totalRows,
    handlePaginationModelChange,
    paginationModel,
    visibleColumns,
    handleRowClick,
    hiddenFieldsRow,
    showDetails,
  } = usePaginatedData({
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
        initialState={initialState}
        visibleColumns={visibleColumns}
        handleRowClick={handleRowClick}
      />
      {showDetails && hiddenFieldsRow && <DetailsBox data={hiddenFieldsRow} />}
    </div>
  );
};

export default Commodity;

// //TODO:
// // details component
