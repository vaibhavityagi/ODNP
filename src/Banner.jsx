import { Typography, Box, Button } from "@mui/material";

export default function Banner() {
  return (
    <div
      style={{
        marginTop: 3,
        backgroundImage: "url(http://localhost:5173/banner-image-1.jpg)",
        backgroundClip: "padding-box",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "85vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "170px",
          left: "470px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            color: "white",
            textShadow: " 1px 1px 10px rgba(0, 0, 0, 0.5)",
            lineHeight: "80px",
          }}
        >
          One
          <Box
            sx={{ display: "inline", color: "rgba(151, 216, 152, 1)", pl: 2 }}
          >
            District
          </Box>
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            color: "white",
            textShadow: " 1px 1px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            sx={{ display: "inline", color: "rgba(151, 216, 152, 1)", pr: 2 }}
          >
            One
          </Box>
          Product
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#177245",
            position: "relative",
            left: "200px",
          }}
        >
          Shop now
        </Button>
      </Box>
    </div>
  );
}
