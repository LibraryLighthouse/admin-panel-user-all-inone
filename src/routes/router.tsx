import { BrowserRouter, Route, Routes } from "react-router";
import LoginUser from "../components/auth/LoginUser";

function routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginUser />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default routing;
