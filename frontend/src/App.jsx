// import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { AccountProvider } from "./context/AccountContext";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <AccountProvider>
      <div className="div">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/registration" Component={Registration} />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* create a route '/recipe/id */}
          <Route
            exact
            path="/recipe/:id"
            element={
              <ProtectedRoute>
                <Recipe />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AccountProvider>
  );
}

export default App;
