import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { GridValidRowModel } from "@mui/x-data-grid-premium";
import { cleanText, getColor } from "./utils";
import CloseIcon from "@mui/icons-material/Close";

interface DetailsBoxProps {
  data: GridValidRowModel;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
const DetailsBox = ({ data, setShowDetails }: DetailsBoxProps) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        padding: 2,
        backgroundColor: "#678dc6",
      }}
    >
      <CloseIcon
        sx={{ color: "white", cursor: "pointer" }}
        onClick={() => {
          setShowDetails((prev) => !prev);
        }}
      />
      <CardContent sx={{ width: "100%" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
          }}
        >
          Details
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Box
          display="grid"
          sx={{ gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))" }}
        >
          {Object.entries(data).map(([key, value], index) => {
            const backgroundColor = getColor(
              index,
              Object.entries(data).length
            );
            const textColor =
              index / Object.entries(data).length > 0.5 ? "black" : "white";

            return (
              <Box
                key={index}
                sx={{
                  margin: 1,
                  backgroundColor,
                  padding: 1,
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textTransform: "capitalize",
                    color: textColor,
                  }}
                >
                  {key.replace(/([A-Z])/g, " $1")}:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: textColor,
                  }}
                >
                  {typeof value === "object" && value !== null
                    ? cleanText(value)
                    : String(value)}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DetailsBox;
