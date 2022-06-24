import { Dialog } from "primereact/dialog";
import { ProgressSpinner } from "primereact/progressspinner";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export const Loading = () => {
  return (
    <Dialog
          position="center"
          draggable={false}
          modal={true}
          visible={true}
          closable={false}
          showHeader={false}
          contentStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
    >
      <ProgressSpinner fill="transparent" />
    </Dialog>
  );
};
