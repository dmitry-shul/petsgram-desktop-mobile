import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Notification() {
  return (
    <ToastContainer
        position="bottom-right"
        transition={Slide}
        autoClose={1600}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        limit={2}
        closeButton={false}
      />
  );
}