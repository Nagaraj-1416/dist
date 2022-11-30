import ErrPageImg from "../assests/social/1-10.webp";
const ErrPage = () => {
  return (
    <>
      <p>Oops Something Went Wrong.........!</p>
      <img
        src={ErrPageImg}
        alt={"ErrImg"}
        style={{ width: "1400px", height: "300px" }}
      ></img>
    </>
  );
};

export default ErrPage;
