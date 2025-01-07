import {
  GridColDef,
  GridInitialState,
  GridValidRowModel,
} from "@mui/x-data-grid-premium";

export type DataSetType = "Commodity" | "Employee";
export interface DemoData {
  columns: GridColDef[];
  rows: GridValidRowModel[];
  initialState?: GridInitialState;
}
export interface VisibleColumnsIndexes {
  visibleColumnsStart: number;
  visibleColumnsEnd: number;
}
