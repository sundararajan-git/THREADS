import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./LAYOUTS/AuthLayout";
import Home from "./PAGES/HOME/Home";
import PublicLayout from "./LAYOUTS/PublicLayout";
import SignUp from "./PAGES/SIGNUP/SignUp";
import Login from "./PAGES/LOGIN/Login";
import Verification from "./PAGES/VERIFICATION/Verification";
import ResetPassword from "./PAGES/RESETPASSWORD/ResetPassword";
import PageNotFound from "./PAGES/404/PageNotFound";

const App = () => {
  // VALIDATE FROM THE CUSTOM HOOK
  // const { pageloading, isValidUser } = useValidUser();

  const pageloading = false;

  const isValidUser = true;

  if (pageloading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        {/* <Loader /> */}
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route element={<AuthLayout isValidUser={isValidUser} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PublicLayout isValidUser={isValidUser} />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/resetpassword/:id" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;

{
  /* // const { colorMode, toggleColorMode } = useColorMode(); */
}
