import "./myheaderStyles.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";


export const MyHeader = () => {
  return (
    <>
      <header className="flex align-items-center justify-content-around w-100 p-3">
        <Link to="/">
          <h3 style={{ color: "white" }}>
            fabio<span>Script</span>
          </h3>
        </Link>
        <i className="pi pi-sun whitemode" style={{ cursor: "pointer" }} />
      </header>
    </>
  );
};
