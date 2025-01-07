import { useCallback, useMemo, useState } from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataSetType, DemoData, VisibleColumnsIndexes } from "./types";
import { NUM_OF_ROWS_TO_GENERATE, PAGE_SIZE } from "./consts";
import {
  GridPaginationModel,
  GridRowId,
  GridRowParams,
  GridValidRowModel,
} from "@mui/x-data-grid-premium";
import { getHiddenRowFields } from "./utils";

interface PaginatedDataProps {
  dataSet: DataSetType;
  visibleColumnsIndexes: VisibleColumnsIndexes;
  page?: number;
  pageSize?: number;
  rowsToGenerate?: number;
}

// interface Row {
//   mainFields: GridValidRowModel; //TODO: remove?
//   hiddenFields: GridValidRowModel;
// }

const usePaginatedData = ({
  //TODO: rename hook name
  dataSet,
  visibleColumnsIndexes,
  page = 0,
  pageSize = PAGE_SIZE,
  rowsToGenerate = NUM_OF_ROWS_TO_GENERATE,
}: PaginatedDataProps) => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize,
    page,
  });

  const [currentRow, setCurrentRow] = useState<GridValidRowModel>(
    {} as GridValidRowModel
  );

  const [showDetails, setShowDetails] = useState(false);

  const { data, loading } = useDemoData({
    //TODO: move to api file
    dataSet,
    rowLength: rowsToGenerate,
    // editable: true, TODO: remove
  });

  const visibleColumns = data.columns.slice(
    visibleColumnsIndexes.visibleColumnsStart,
    visibleColumnsIndexes.visibleColumnsEnd
  );

  const hiddenColumns = data.columns.slice(
    visibleColumnsIndexes.visibleColumnsEnd
  );

  const hiddenFieldsRow = useMemo(
    () => getHiddenRowFields(currentRow, hiddenColumns),
    [currentRow, hiddenColumns]
  );

  const handleRowClick = (row: GridRowParams) => {
    setCurrentRow(row);
    setShowDetails(true);
  };

  const handlePaginationModelChange = useCallback(
    (model: GridPaginationModel) => {
      setPaginationModel(model);
    },
    [setPaginationModel]
  );

  const paginateData = useCallback(() => {
    if (!data.rows) return { ...data, rows: [] };

    const rows = data.rows || [];
    const startIndex = paginationModel.page * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedRows = rows.slice(startIndex, endIndex);

    return {
      ...data,
      rows: paginatedRows,
    };
  }, [data, paginationModel, page, pageSize]);

  const initialState = {
    pagination: {
      paginationModel: { pageSize, page },
    },
  };

  return {
    paginatedData: paginateData(),
    loading,
    initialState,
    totalRows: data.rows?.length || 0,
    paginationModel,
    handlePaginationModelChange,
    visibleColumns,
    handleRowClick,
    hiddenFieldsRow,
    showDetails
  };
};

export default usePaginatedData;
