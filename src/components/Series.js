import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Series = () => {
  const [array, setArray] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/entries")
      .then((data) => {
        console.log(data.data);
        setArray([...data.data]);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="box-container">
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{
          position: "relative",
          left: "150px",
          bgcolor: "#42944a",
        }}
      >
        Goto Home
      </Button>
      {array
        .filter((item) => item.programType === "series")
        .map((val, i) => (
          <div key={i} className="box" style={{ backgroundColo: val.color }}>
            <b>Title: </b>
            {val.title}
            <br />
            <b>Program Type: </b>
            {val.programType}
            <br />
            <b>
              <img
                src={val.images.poster.url}
                style={{ width: "300px", height: "400px" }}
              ></img>
            </b>

            <br />
          </div>
        ))}
      <div className="clearboth"> </div>
    </div>
  );
};

export default Series;
