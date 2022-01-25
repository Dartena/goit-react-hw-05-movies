import { AppDiv } from "./styles/styled";
import { ToastContainer } from "react-toastify";
import AppHeader from "./components/AppHeader";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppDiv>
      <AppHeader />
      <Outlet />
      <ToastContainer theme="colored" />
    </AppDiv>
  );
}

export default App;
