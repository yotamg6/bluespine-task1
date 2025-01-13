import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataSetType, VisibleColumnsIndexes } from "../types/types";
import { NUM_OF_ROWS_TO_GENERATE, PAGE_SIZE } from "../utils/constants";
import {
  GridPaginationModel,
  GridRowParams,
  GridValidRowModel,
} from "@mui/x-data-grid-premium";
import { debounce, getHiddenRowFields, sliceColumns } from "../utils/utils";

interface UseTableDataProps {
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
}: UseTableDataProps) => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize,
    page,
  });

  const [currentRow, setCurrentRow] = useState<GridValidRowModel>(
    {} as GridValidRowModel
  );

  const [showDetails, setShowDetails] = useState(false);

  const [search, setSearch] = useState<string>("");

  const [totalRows, setTotalRows] = useState(0);

  const { data, loading } = useDemoData({
    dataSet,
    rowLength: rowsToGenerate,
    editable: true,
  });

  useEffect(() => {
    setPaginationModel({
      pageSize,
      page: 0,
    });
    setShowDetails(false);
  }, [dataSet, pageSize, setShowDetails]);

  const modifiedData = useMemo(() => {
    const newData = { ...data };
    newData.columns = data.columns.map((column) => ({
      ...column,
      flex: 1,
      minWidth: 170,
      headerAlign: "left",
      align: "left",
    }));
    return newData;
  }, [data]);

  const { visibleColumns, hiddenColumns } = sliceColumns(
    visibleColumnsIndexes.start,
    visibleColumnsIndexes.end,
    modifiedData
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
      setShowDetails(false);
    },
    [setPaginationModel, setShowDetails]
  );

  const debouncedSearch = useRef(
    debounce((value: string) => {
      setSearch(value);
    }, 300)
  ).current;

  const handleSearchBarChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputValue = (event.target as HTMLInputElement).value;
      debouncedSearch(inputValue);
    },
    [debouncedSearch]
  );

  const paginateData = useCallback(() => {
    if (!modifiedData.rows) return { ...modifiedData, rows: [] };

    if (search) {
      const rows = modifiedData.rows;
      const filteredRows = [];
      for (const row of rows) {
        const filtered = Object.values(row).some((value) => {
          return value === search;
        });
        if (filtered) {
          filteredRows.push(row);
        }
      }
      return {
        ...modifiedData,
        rows: filteredRows,
      };
    }

    const rows = modifiedData.rows || [];
    const startIndex = paginationModel.page * paginationModel.pageSize;
    const endIndex = startIndex + paginationModel.pageSize;
    const paginatedRows = rows.slice(startIndex, endIndex);

    return {
      ...modifiedData,
      rows: paginatedRows,
    };
  }, [modifiedData, paginationModel, search]);

  useEffect(() => {
    const rows = modifiedData.rows || [];
    if (search) {
      const filteredRows = rows.filter((row) =>
        Object.values(row).some((value) => value === search)
      );
      setTotalRows(filteredRows.length);
    } else {
      setTotalRows(rows.length);
    }
  }, [modifiedData.rows, search]);

  return {
    paginatedData: paginateData(),
    loading,
    totalRows,
    paginationModel,
    handlePaginationModelChange,
    visibleColumns,
    handleRowClick,
    hiddenFieldsRow,
    showDetails,
    setShowDetails,
    handleSearchBarChange,
  };
};

export default useTableData;
