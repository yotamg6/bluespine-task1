import { SvgIconProps } from "@mui/material";
import {
  GridColDef,
  GridInitialState,
  GridValidRowModel,
} from "@mui/x-data-grid-premium";
import { ReactElement } from "react";

export type DataSetType = "Commodity" | "Employee";
export interface DemoData {
  columns: GridColDef[];
  rows: GridValidRowModel[];
  initialState?: GridInitialState;
}
export interface VisibleColumnsIndexes {
  start: number;
  end: number;
}

export interface Page {
  title: string;
  dataSet: DataSetType;
  sideBarIcon: ReactElement<SvgIconProps>;
  visibleColumnsIndexes: VisibleColumnsIndexes
}
