import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { GridValidRowModel } from "@mui/x-data-grid-premium";

interface DetailsBoxProps {
  data: GridValidRowModel;
}
const DetailsBox = ({ data }: DetailsBoxProps) => {
  const formatValue = (value: any): string => {
    if (value === null || value === undefined) return "-";
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (value instanceof Date) return value.toLocaleDateString();
    if (typeof value === "object") return value.label || JSON.stringify(value);
    return String(value);
  };

  console.log("data", data);

  return (
    <Card
      sx={{
        // maxWidth: 400,
        borderRadius: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        padding: 2,
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Typography variant="h6" component="div" gutterBottom>
          Details
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Box>
          {Object.entries(data).map(([key, value], index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ textTransform: "capitalize" }}
              >
                {key.replace(/([A-Z])/g, " $1")}:
              </Typography>
              <Typography variant="body1" color="text.primary">
                {typeof value === "object" && value !== null
                  ? JSON.stringify(value, null, 2)
                  : String(value)}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DetailsBox;
