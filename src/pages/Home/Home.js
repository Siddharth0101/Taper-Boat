import homeImage from "../../asset/Images/Creatives_2000x750_9dd6fd6d-35a1-4736-b88d-ea34f385041e_2100x.webp";
import Image from "react-bootstrap/Image";
const Home = () => {
  return (
    <div>
      <Image src={homeImage} fluid style={{ height: "93vh" }} />;
    </div>
  );
};
export default Home;
