import { Box } from "@mui/material";
import {
  DataGridPremium,
  GridCallbackDetails,
  GridColDef,
  GridEventListener,
  GridFooter,
  GridFooterContainer,
  GridPagination,
  GridPaginationModel,
  GridToolbar,
  GridValidRowModel,
  useGridApiRef,
} from "@mui/x-data-grid-premium";
import { DemoData } from "./types";
import { GridInitialStatePremium } from "@mui/x-data-grid-premium/models/gridStatePremium";
import { PAGE_SIZE_OPTIONS } from "./consts";

interface TableProps {
  isLoading: boolean;
  paginationModel: GridPaginationModel;
  handlePaginationModelChange: (model: GridPaginationModel) => void;
  data: DemoData;
  totalRows: number;
  initialState: GridInitialStatePremium;
  visibleColumns: GridColDef<GridValidRowModel>[];
  handleRowClick: GridEventListener<"rowClick">;
  pageSizeOptions?: number[];
}

const Table = ({
  data,
  isLoading,
  handlePaginationModelChange,
  paginationModel,
  totalRows,
  visibleColumns,
  handleRowClick,
  initialState,
  pageSizeOptions = PAGE_SIZE_OPTIONS,
}: TableProps) => {
  const apiRef = useGridApiRef();

  const CustomFooter = () => {
    return (
      <GridFooterContainer
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        <GridFooter />
      </GridFooterContainer>
    );
  };

  return (
    <Box
      sx={{
        marginTop: 7,
        height: "45rem",
        "& .MuiDataGrid-columnHeaders": {
          position: "sticky",
          top: 0,
          zIndex: 1,
        },
      }}
    >
      <DataGridPremium
        apiRef={apiRef}
        {...data}
        loading={isLoading}
        // initialState={initialState} //TODO: remove
        slots={{ toolbar: GridToolbar, footer: CustomFooter }}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        rowCount={totalRows}
        paginationMode="server"
        pageSizeOptions={pageSizeOptions}
        columns={visibleColumns}
        onRowClick={handleRowClick}
      />
    </Box>
  );
};

export default Table;
