import { ReactElement } from "react";
import Commodity from "./Commodity";
import Employee from "./Employee";

interface PageContainerProps {
  currentPage: number;
}
const PageContainer = ({ currentPage }: PageContainerProps) => {
  const getPageByNumber = (page: number) => {
    const numberToPage: Record<number, ReactElement> = {
      1: <Commodity />,
      2: <Employee />,
    };
    return numberToPage[page];
  };
  return <>{getPageByNumber(currentPage)}</>;
};
export default PageContainer;
