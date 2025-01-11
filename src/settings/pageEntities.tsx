import { Page } from "../types/types";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BadgeIcon from "@mui/icons-material/Badge";

const commodity: Page = {
  title: "Commodity",
  sideBarIcon: <LocalMallIcon />,
  dataSet: "Commodity",
  visibleColumnsIndexes: { start: 0, end: 15 },
};

const employee: Page = {
  title: "Employee",
  sideBarIcon: <BadgeIcon />,
  dataSet: "Employee",
  visibleColumnsIndexes: { start: 0, end: 15 },
};
export const pages: Page[] = [commodity, employee];
