import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Container maxWidth="sm">
        <div style={{ marginLeft: -300 }}>
          <Link to={"/series"}>
            <Button>
              <Box
                sx={{
                  bgcolor: "#2b2b28",
                  height: 300,
                  width: 200,
                  marginBottom: "40px",
                  marginTop: "40px",
                }}
              />

              <p
                style={{
                  position: "relative",
                  top: "170px",
                  right: "160px",
                  color: "#2b2b28",
                }}
              >
                Popular Series
              </p>
              <p
                style={{
                  position: "relative",
                  right: "250px",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Series
              </p>
            </Button>
          </Link>
          <Link to={"/movies"}>
            <Button>
              <Box
                sx={{
                  bgcolor: "#2b2b28",
                  height: 300,
                  width: 200,
                  marginBottom: "40px",
                  marginTop: "40px",
                }}
              />
              <p
                style={{
                  position: "relative",
                  top: "170px",
                  left: -155,
                  color: "#2b2b28",
                }}
              >
                Popular Movies
              </p>
              <p
                style={{
                  position: "relative",
                  left: "-260px",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Movies
              </p>
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}
export default Home;
