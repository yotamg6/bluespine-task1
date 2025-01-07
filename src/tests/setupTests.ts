import "@testing-library/jest-dom";

// Mock MUI components that might cause issues
jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useTheme: jest.fn(() => ({
    palette: {},
    typography: {},
    spacing: jest.fn(),
  })),
}));
