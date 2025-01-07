import { useCallback, useMemo, useState } from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataSetType, VisibleColumnsIndexes } from "../types";
import { NUM_OF_ROWS_TO_GENERATE, PAGE_SIZE } from "../utils/constants";
import {
  GridPaginationModel,
  GridRowParams,
  GridValidRowModel,
} from "@mui/x-data-grid-premium";
import { getHiddenRowFields } from "../utils/utils";

interface PaginatedDataProps {
  dataSet: DataSetType;
  visibleColumnsIndexes: VisibleColumnsIndexes;
  page?: number;
  pageSize?: number;
  rowsToGenerate?: number;
}

const useTableData = ({
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
    dataSet,
    rowLength: rowsToGenerate,
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

  return {
    paginatedData: paginateData(),
    loading,
    totalRows: data.rows?.length || 0,
    paginationModel,
    handlePaginationModelChange,
    visibleColumns,
    handleRowClick,
    hiddenFieldsRow,
    showDetails,
    setShowDetails,
  };
};

export default useTableData;
