import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CSAEPolicy from "./components/CSAEPolicy";
import NotFound from "./components/NotFound";
import Guides from "./components/Guides";
import GuideBookmarks from "./components/GuideBookmarks";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  return <LandingPage />;
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/csae-policy" element={<CSAEPolicy />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/bookmarks" element={<GuideBookmarks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Analytics />
        </BrowserRouter>
        <SpeedInsights />
      </div>
    </HelmetProvider>
  );
}

export default App;