import React from "react";
import SingIn from "./compoments/SingIn";
import Header from "./compoments/Header";
import SignUp from "./compoments/SignUp";
import { AuthContext } from "./Context/AuthContext";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./compoments/HomePage";
import DetailPage from "./compoments/DetailPage";
import ReactChat from "./compoments/ReactChat";
import OwnerChat from "./compoments/OwnerChat";

function MyApp() {
  const { currentUser, adminUser } = React.useContext(AuthContext);
  const [jwt, setJWT] = React.useState(localStorage.getItem("jwt-token"));
  const [admin, setAdmin] = React.useState(localStorage.getItem("admin"));

  console.log(`JWT TOKEN ${jwt}`);
  return (
    <div>
      <Header />

      {(!currentUser || !adminUser) && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/detail" element={<DetailPage />} /> */}
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      )}
      {(currentUser || jwt) && (!adminUser || !admin) && (
        <Routes>
          <Route path="/chat" element={<ReactChat />} />
          {/* <Route path="/adminchat" element={<OwnerChat />} /> */}
        </Routes>
      )}
      {(adminUser || admin) && (
        <Routes>
          <Route path="/adminchat" element={<OwnerChat />} />
          <Route path="/chat" element={<Navigate replace to="/adminchat" />} />
        </Routes>
      )}
    </div>
  );
}

export default MyApp;
