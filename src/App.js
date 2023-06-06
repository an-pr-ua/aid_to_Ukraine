import ".App.css";
import Navi from "./components/Navi";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageMain from "./components/PageMain";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SuccessfulStoriesPage from "./components/SuccesfulStoriesPage";
import PageCurrentNeeds from "./components/PageCurrentNeeds";
import Contacts from "./components/Contacts";
import OurTeam from "./components/OurTeam";
import MainDream from "./components/MainDream";
import Documents from "./components/Documents";

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/aid_to_Ukraine/" element={<PageMain />} />
        <Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="/successfulstories"
            element={<SuccessfulStoriesPage />}
          />
          <Route path="/current" element={<PageCurrentNeeds />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/maindream" element={<MainDream />} />
          <Route path="/documents" element={<Documents />} />
        </Route>

        <Route path="*" element={<h1>ERROR</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
    // </>
  );
}

export default App;
