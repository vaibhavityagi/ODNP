import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Banner from "./Banner";
import ProductTiles from "./ProductTiles";
function App() {
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <Banner />
      {/* <ProductTiles /> */}
    </>
  );
}

export default App;
