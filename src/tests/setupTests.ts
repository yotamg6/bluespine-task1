import "@testing-library/jest-dom";
jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useTheme: jest.fn(() => ({
    palette: {},
    typography: {},
    spacing: jest.fn(),
  })),
}));
