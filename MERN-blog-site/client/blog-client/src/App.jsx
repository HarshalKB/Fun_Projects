import IndexPage from "./components/IndexPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import "./App.css";
import { UserContextProvider } from "./components/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
