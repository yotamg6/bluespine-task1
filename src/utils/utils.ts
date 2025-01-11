import { GridValidRowModel } from "@mui/x-data-grid-premium";
import { GridColDefGenerator } from "@mui/x-data-grid-generator";
import { DemoTreeDataValue } from "@mui/x-data-grid-generator/services/tree-data-generator";
import { pages } from "../settings/pageEntities";

export const getHiddenRowFields = (
  params: { row?: GridValidRowModel } | undefined,
  hiddenColumns: GridColDefGenerator[]
) => {
  if (!params?.row) {
    return {};
  }

  const rowData = params.row;

  const hiddenRowFields = hiddenColumns.reduce<GridValidRowModel>(
    (acc, cur) => {
      const field = cur.field;
      if (field in rowData) {
        acc[field] = rowData[field];
      }
      return acc;
    },
    {}
  );
  if (Object.keys(hiddenRowFields).length < 5) {
    return rowData;
  }
  return hiddenRowFields;
};

export const cleanText = (text: string) => {
  return JSON.stringify(text, null, 2)
    .replace(/"/g, "")
    .replace(/[{}[\]]/g, "");
};

export const getColor = (index: number, total: number) => {
  const ratio = index / (total - 1);

  const r = Math.round(181 + (255 - 181) * ratio);
  const g = Math.round(199 + (192 - 199) * ratio);
  const b = Math.round(235 + (203 - 235) * ratio);

  return `rgb(${r}, ${g}, ${b})`;
};

export const sliceColumns = (
  start: number,
  end: number,
  data: DemoTreeDataValue
) => {
  const visibleColumns = data.columns.slice(start, end);

  const hiddenColumns = data.columns.slice(end);

  return { visibleColumns, hiddenColumns };
};

export const getPageByIndex = (page: number) => {
  return pages[page];
};
