import { Box } from "@mui/material";
import {
  DataGridPremium,
  GridColDef,
  GridEventListener,
  GridFooter,
  GridFooterContainer,
  GridPaginationModel,
  GridToolbar,
  GridValidRowModel,
  useGridApiRef,
} from "@mui/x-data-grid-premium";
import { DemoData } from "../types/types";
import { PAGE_SIZE_OPTIONS } from "../utils/constants";

interface TableProps {
  isLoading: boolean;
  paginationModel: GridPaginationModel;
  handlePaginationModelChange: (model: GridPaginationModel) => void;
  data: DemoData;
  totalRows: number;
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
        backgroundColor: "#b5c7eb",
        height: showDetails ? "23rem" : "45rem",
        overflowX: "auto",
        width: "calc(100vw - 250px)", // width of sideBar
      }}
    >
      <DataGridPremium
        apiRef={apiRef}
        {...data}
        loading={isLoading}
        slots={{ toolbar: GridToolbar, footer: CustomFooter }}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        rowCount={totalRows}
        paginationMode="server"
        pageSizeOptions={pageSizeOptions}
        columns={visibleColumns}
        onRowClick={handleRowClick}
        sx={{
          "& .MuiDataGrid-row:hover": {
            cursor: "pointer",
          },
        }}
      />
    </Box>
  );
};

export default Table;
