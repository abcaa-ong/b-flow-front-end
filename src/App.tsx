import { Navigate, Route, Routes } from "react-router-dom";

import { IndexPage } from "@/pages/Index";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
