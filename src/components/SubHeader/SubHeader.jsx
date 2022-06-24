import "./subheaderStyles.css";
import marlonPic from "../../assets/bio.jpg";

export const SubHeader = () => {
  return (
    <div className="subHeader flex flex-column align-items-center justify-content-center w-100 gap-3">
      <div className="bio flex flex-column align-items-center justify-content-center gap-3 px-5">
        <img src={marlonPic} alt="aqui vai a foto principal" />
        <p style={{ color: "white" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          excepturi rem molestias! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Porro illum voluptas perferendis.
        </p>
      </div>
      <div className="social flex gap-4 p-3">
        <a href="https://www.linkedin.com/in/fabiodeandrad/">
          <h3>LinkedIn</h3>
        </a>
        <a href="https://www.linkedin.com/in/fabiodeandrad/">
          <h3>GitHub</h3>
        </a>
        <a href="https://www.linkedin.com/in/fabiodeandrad/">
          <h3>Instagram</h3>
        </a>
        <a href="https://www.linkedin.com/in/fabiodeandrad/">
          <h3>CodeWars</h3>
        </a>
      </div>
    </div>
  );
};
