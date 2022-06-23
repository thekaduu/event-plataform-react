import { Routes, Route } from "react-router-dom";
import LessonPage from "./pages/LessonPage";

export function Router() {
  return (
    <Routes>
      <Route path="/aulas/:slug" element={<LessonPage />} />
    </Routes>
  )
}