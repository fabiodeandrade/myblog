import "./myheaderStyles.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { SubHeader } from "../SubHeader/SubHeader";

export const MyHeader = () => {
  return (
    <>
      <header className="flex align-items-center justify-content-around w-100 p-3">
        <h3 style={{ color: "white" }}>
          fabio<span>Script</span>
        </h3>
        <i className="pi pi-sun whitemode" style={{ cursor: "pointer" }} />
      </header>
      <SubHeader />
    </>
  );
};
