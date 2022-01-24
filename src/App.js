import { AppDiv } from "./styles/styled";

import AppHeader from "./components/AppHeader";
import { Outlet } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppDiv>
      <AppHeader />
      <Outlet></Outlet>
    </AppDiv>
  );
}

export default App;
