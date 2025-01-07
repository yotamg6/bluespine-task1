export const useDemoData = jest.fn(() => ({
  data: {
    rows: [{ id: 1, name: "Test" }],
    columns: [{ field: "name", headerName: "Name" }],
  },
  loading: false,
}));
