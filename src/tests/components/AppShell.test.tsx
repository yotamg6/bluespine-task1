import { render } from "@testing-library/react";
import App from "../../components/App";

describe("AppShell", () => {
  it("should set document title on mount", () => {
    render(<App />);
    expect(document.title).toBe("Bluespine - Task-1");
  });
});
