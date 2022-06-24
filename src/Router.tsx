import { Routes, Route } from "react-router-dom";
import LessonPage from "./pages/LessonPage";
import { SubscribePage } from "./pages/SubscribePage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <SubscribePage /> } />
      <Route path="/aulas/:slug" element={<LessonPage />} />
    </Routes>
  )
}