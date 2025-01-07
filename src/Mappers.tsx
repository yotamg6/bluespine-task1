import LocalMallIcon from "@mui/icons-material/LocalMall";
import BadgeIcon from "@mui/icons-material/Badge";
import { SvgIconProps } from "@mui/material";
import { ReactElement } from "react";
//TODO is file naming here correct?
export const ICONS: Record<string, ReactElement<SvgIconProps>> = {
  Commodity: <LocalMallIcon />,
  Employee: <BadgeIcon />,
};
