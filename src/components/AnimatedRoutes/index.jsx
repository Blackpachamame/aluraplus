import PropTypes from "prop-types";
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

export default function AnimatedRoutes({
  videosUse,
  formacionesUse,
  agregarVideo,
  eliminarVideo,
  actualizarVideo,
  actualizarFormacionVideo,
  actualizarFav,
  agregarFormacion,
  eliminarFormacion,
  actualizarFormacion,
}) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route
          path="/"
          element={<Home videosUse={videosUse} formaciones={formacionesUse} />}
        />
        {/* Favoritos */}
        <Route
          path="/favoritos"
          element={
            <Favoritos videosUse={videosUse} formaciones={formacionesUse} />
          }
        />
        {/* Videos */}
        <Route
          path="/video/:id"
          element={
            <Video videosUse={videosUse} actualizarFav={actualizarFav} />
          }
        />
        <Route
          path="/video/lista"
          element={
            <ListVideos videosUse={videosUse} eliminarVideo={eliminarVideo} />
          }
        />
        <Route
          path="/video/agregar"
          element={
            <AddVideo
              agregarVideo={agregarVideo}
              formaciones={formacionesUse}
            />
          }
        />
        <Route
          path="/video/editar/:id"
          element={
            <EditVideo
              videosUse={videosUse}
              actualizarVideo={actualizarVideo}
              formaciones={formacionesUse}
            />
          }
        />
        {/* Formaciones */}
        <Route
          path="/formacion/lista"
          element={
            <ListFormaciones
              formacionesUse={formacionesUse}
              eliminarFormacion={eliminarFormacion}
            />
          }
        />
        <Route
          path="/formacion/agregar"
          element={
            <AddFormacion
              agregarFormacion={agregarFormacion}
              formaciones={formacionesUse}
            />
          }
        />
        <Route
          path="/formacion/editar/:id"
          element={
            <EditFormacion
              videosUse={videosUse}
              formaciones={formacionesUse}
              actualizarFormacionVideo={actualizarFormacionVideo}
              actualizarFormacion={actualizarFormacion}
            />
          }
        />
        {/* Error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
}

AnimatedRoutes.propTypes = {
  videosUse: PropTypes.array,
  formacionesUse: PropTypes.array,
  agregarVideo: PropTypes.func,
  eliminarVideo: PropTypes.func,
  actualizarVideo: PropTypes.func,
  actualizarFormacionVideo: PropTypes.func,
  actualizarFav: PropTypes.func,
  agregarFormacion: PropTypes.func,
  eliminarFormacion: PropTypes.func,
  actualizarFormacion: PropTypes.func,
};
