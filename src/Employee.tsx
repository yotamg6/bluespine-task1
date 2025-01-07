import { useMemo } from "react";
import DetailsBox from "./DetailsBox";
import Table from "./Table";
import { VisibleColumnsIndexes } from "./types";
import usePaginatedData from "./usePaginatedData";
import { getHiddenRowFields } from "./utils";

const Employee = () => {
  const visibleColumnsIndexes: VisibleColumnsIndexes = {
    visibleColumnsStart: 0,
    visibleColumnsEnd: 15, //TODO: handle cases where less than 15. Table is then deformed
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
    setShowDetails
  } = usePaginatedData({
    dataSet: "Employee",
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
        showDetails={showDetails}
      />
      {showDetails && hiddenFieldsRow && <DetailsBox data={hiddenFieldsRow} setShowDetails={setShowDetails} />}
    </div>
  );
};

export default Employee;
