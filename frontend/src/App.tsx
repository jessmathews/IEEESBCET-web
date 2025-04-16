import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { UploadEventPage } from "./pages/UploadEventPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="events/upload" element={<UploadEventPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}