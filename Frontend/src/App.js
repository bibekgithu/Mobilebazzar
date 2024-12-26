import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import HomePage from "./components/HomePage";
import BuyerPage from "./components/BuyerPage";
import SellerPage from "./components/SellerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller" element={<SellerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
