import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import facebook from "./assests/social/facebook-white.svg";
import twitter from "./assests/social/twitter-white.svg";
import insta from "./assests/social/instagram-white.svg";
import apple from "./assests/store/app-store.svg";
import playstore from "./assests/store/play-store.svg";
import windows from "./assests/store/windows-store.svg";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Home from "./components/Home";
import ErrPage from "./components/ErrPage";
import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading === true ? (
        <p
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          Loading.......
        </p>
      ) : (
        <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "45px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  DEMO Streaming
                </Typography>
                <Button
                  variant="text"
                  sx={{ position: "relative", right: "150px", color: "white" }}
                >
                  Log in
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    position: "relative",
                    right: "100px",
                    bgcolor: "#42444a",
                  }}
                >
                  Start your free trial
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Box
            sx={{
              height: 50,
              backgroundColor: "#42444a",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "30px",
                color: "white",
                position: "relative",
                left: "20px",
              }}
            >
              Popular Series
            </Typography>
          </Box>
          {/* <Link to={"/movies"}>Movie</Link>
      <Link to={"/series"}>seriess</Link> */}
          <Routes>
            <Route path="*" element={<ErrPage />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="/series" element={<Series />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
          </Routes>
          <footer>
            <Box
              sx={{
                height: 150,
                backgroundColor: "#42444a",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  paddingTop: "30px",
                  fontSize: "13px",
                  color: "#f5f7f7",
                  position: "relative",
                  left: "30px",
                }}
              >
                Home | Terms and Conditions | Privacy Ploicy | Collection
                Statement | Help | Manage Account
                <p>Copyright @ 2016 DEMO Streaming. All Rights Reserved</p>
                <React.Fragment>
                  <div>
                    <img
                      src={facebook}
                      style={{ width: "10px", marginTop: "10px" }}
                      alt={"ImgErr"}
                    />
                    <img
                      src={twitter}
                      style={{
                        width: "20px",
                        marginLeft: 10,
                        marginTop: "10px",
                      }}
                      alt={"ImgErr"}
                    />
                    <img
                      src={insta}
                      style={{
                        width: "18px",
                        marginLeft: 10,
                        marginTop: "10px",
                      }}
                      alt={"ImgErr"}
                    />
                  </div>
                  <div
                    style={{ position: "relative", left: 750, marginTop: -60 }}
                  >
                    <img
                      src={apple}
                      style={{ width: "180px", marginLeft: -20 }}
                      alt={"ImgErr"}
                    ></img>
                    <img
                      src={playstore}
                      style={{ width: "180px", marginLeft: 10 }}
                      alt={"ImgErr"}
                    ></img>
                    <img
                      src={windows}
                      style={{ width: "150px", marginLeft: 10 }}
                      alt={"ImgErr"}
                    ></img>
                  </div>
                </React.Fragment>
              </Typography>
            </Box>
          </footer>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
