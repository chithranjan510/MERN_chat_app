import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";

function App() {
  const { userAuthData } = useAuthContext();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const img = new Image();
      img.src = "/backgroundImage.jpg";
      try {
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      } catch (error) {
        console.error(
          `Failed to load image background image: ${error.message}`
        );
      } finally {
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="h-svh flex items-center justify-center">
        <span className="loading loading-spinner loading-lg bg-white" />
      </div>
    );
  }

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
