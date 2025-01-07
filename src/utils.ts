import { GridValidRowModel } from "@mui/x-data-grid-premium";
import { ICONS } from "./Mappers";
import { GridColDefGenerator } from "@mui/x-data-grid-generator";

export const getIconForTitle = (title: string) => {
  const matchingKey = Object.keys(ICONS).find((key) =>
    title.toLowerCase().includes(key.toLowerCase())
  );

  return matchingKey ? ICONS[matchingKey] : null;
};

interface CountryValue {
  value: string;
  code: string;
  label: string;
  phone: string;
}

interface GridValidRowModelWithCountry extends GridValidRowModel {
  counterPartyCountry?: CountryValue;
}

export const getHiddenRowFields = (
  params: { row?: GridValidRowModel } | undefined,
  hiddenColumns: GridColDefGenerator[]
) => {
  if (!params?.row) {
    return {};
  }

  const rowData = params.row;

  return hiddenColumns.reduce<GridValidRowModel>((acc, cur) => {
    const field = cur.field;
    if (field in rowData) {
      acc[field] = rowData[field];
    }
    return acc;
  }, {});
};
