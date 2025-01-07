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
  showDetails: boolean;
}

const Table = ({
  data,
  isLoading,
  handlePaginationModelChange,
  paginationModel,
  totalRows,
  visibleColumns,
  handleRowClick,
  showDetails,
  initialState, //TODO: remove
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
        backgroundColor: "#b5c7eb",
        height: showDetails ? "23rem" : "45rem",
        "& .MuiDataGrid-columnHeaders": {
          position: "sticky",
          top: 0,
          zIndex: 1,
        },
        "& .MuiDataGrid-columnHeader": {
          //   backgroundColor: "#8ddcdc",
          backgroundColor: "#f2f0ef",
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
