import React from "react";

// import react-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Resume from "./pages/Resume";
import Contacts from "./pages/Contacts";
import NotFoundPage from "./pages/NotFoundPage";

import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Resume />}></Route>
          <Route path="Resume" element={<Resume />}></Route>
          <Route path="Contacts" element={<Contacts />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
