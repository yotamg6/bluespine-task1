import { renderHook } from "@testing-library/react";
import useTableData from "../../hooks/useTableData";
import { DataSetType } from "../../types";

describe("useTableData", () => {
  it("should initialize with correct default values", () => {
    const props = {
      dataSet: "Commodity" as DataSetType,
      visibleColumnsIndexes: {
        visibleColumnsStart: 0,
        visibleColumnsEnd: 1,
      },
    };

    const { result } = renderHook(() => useTableData(props));

    expect(result.current.loading).toBe(false);
    expect(result.current.showDetails).toBe(false);
    expect(result.current.paginationModel).toEqual({ page: 0, pageSize: 15 });
    expect(result.current.totalRows).toBe(1);
  });
});
