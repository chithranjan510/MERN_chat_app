import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { userAuthData } = useAuthContext();
  return (
    <Routes>
      <Route
        path="/"
        element={userAuthData ? <HomePage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/login"
        element={userAuthData ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={userAuthData ? <Navigate to="/" replace /> : <SignUpPage />}
      />
      <Route
        path="*"
        element={
          userAuthData ? (
            <Navigate to="/" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
