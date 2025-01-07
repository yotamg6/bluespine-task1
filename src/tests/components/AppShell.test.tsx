import { render } from "@testing-library/react";
import AppShell from "../../components/AppShell";

describe("AppShell", () => {
  it("should set document title on mount", () => {
    render(<AppShell />);
    expect(document.title).toBe("Bluespine - Task-1");
  });
});
