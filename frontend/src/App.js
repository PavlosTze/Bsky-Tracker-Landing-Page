import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CSAEPolicy from "./components/CSAEPolicy";

const Home = () => {
  return <LandingPage />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/csae-policy" element={<CSAEPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;