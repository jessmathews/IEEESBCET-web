import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { UploadEventPage } from "./pages/UploadEventPage";
import { ExecomPage } from "./pages/ExecomPage";


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="execom" element={<ExecomPage />} />
          <Route path="events/upload" element={<UploadEventPage />} />
      </Route>
      </Routes>
    </HashRouter>
  );
}