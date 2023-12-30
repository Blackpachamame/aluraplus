import { Routes, Route, useLocation } from "react-router-dom";
import {
  ListVideos,
  Home,
  Favoritos,
  Video,
  ListFormaciones,
  AddVideo,
  EditVideo,
  Error404,
  AddFormacion,
  EditFormacion,
} from "../../pages";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Favoritos */}
        <Route path="/favoritos" element={<Favoritos />} />
        {/* Videos */}
        <Route path="/video/:id" element={<Video />} />
        <Route path="/video/lista" element={<ListVideos />} />
        <Route path="/video/agregar" element={<AddVideo />} />
        <Route path="/video/editar/:id" element={<EditVideo />} />
        {/* Formaciones */}
        <Route path="/formacion/lista" element={<ListFormaciones />} />
        <Route path="/formacion/agregar" element={<AddFormacion />} />
        <Route path="/formacion/editar/:id" element={<EditFormacion />} />
        {/* Error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
}
