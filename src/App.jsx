import { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Video from "./pages/Video";
import AddVideo from "./pages/AddVideo";
import EditVideo from "./pages/EditVideo";
import Error404 from "./pages/Error404";
import ListVideos from "./pages/ListVideos";
import { videos } from "./assets/data/videos";
import { formaciones } from "./assets/data/formaciones";
import ListFormaciones from "./pages/ListFormaciones";
import AddFormacion from "./pages/AddFormacion";
import EditFormacion from "./pages/EditFormacion";

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const mostrarBarraBusqueda = () => {
    setToggleSearch(!toggleSearch);
  };

  const [videosUse, actualizarVideos] = useState(getInitialVideos);
  const [formacionesUse, actualizarFormaciones] = useState(
    getInitialFormaciones
  );

  useEffect(() => {
    localStorage.setItem("videosUse", JSON.stringify(videosUse));
  }, [videosUse]);
  useEffect(() => {
    localStorage.setItem("formacionesUse", JSON.stringify(formacionesUse));
  }, [formacionesUse]);

  function getInitialVideos() {
    const savedVideos = localStorage.getItem("videosUse");
    return savedVideos ? JSON.parse(savedVideos) : videos;
  }
  function getInitialFormaciones() {
    const savedFormaciones = localStorage.getItem("formacionesUse");
    return savedFormaciones ? JSON.parse(savedFormaciones) : formaciones;
  }

  //Agregar video
  const agregarVideo = (video) => {
    actualizarVideos([...videosUse, video]);
  };

  //Eliminar video
  const eliminarVideo = (id) => {
    const nuevosVideos = videosUse.filter((video) => video.id !== id);
    actualizarVideos(nuevosVideos);
  };

  //Actualizar video
  const actualizarVideo = (videoActualizado) => {
    const videosActualizados = videosUse.map((video) =>
      videoActualizado.id === video.id
        ? {
            ...video,
            urlVideo: videoActualizado.urlVideo,
            imgVideo: videoActualizado.imgVideo,
            formacion: videoActualizado.formacion,
            title: videoActualizado.title,
            descripcion: videoActualizado.descripcion,
          }
        : video
    );
    actualizarVideos(videosActualizados);
  };

  //Agregar formacion
  const agregarFormacion = (nuevaFormacion) => {
    actualizarFormaciones([...formacionesUse, nuevaFormacion]);
  };

  //Eliminar formacion
  const eliminarFormacion = (id) => {
    const nuevosformaciones = formacionesUse.filter(
      (formacion) => formacion.id !== id
    );
    actualizarFormaciones(nuevosformaciones);
  };

  //Actualizar formacion
  const actualizarFormacion = (formacionActualizada) => {
    const formacionesActualizados = formacionesUse.map((formacion) =>
      formacionActualizada.id === formacion.id
        ? {
            ...formacion,
            name: formacionActualizada.name,
            color: formacionActualizada.color,
            icon: formacionActualizada.icon,
          }
        : formacion
    );
    actualizarFormaciones(formacionesActualizados);
  };

  return (
    <StyledContainer
      className={toggleSearch ? "header__nav--busca--visible" : ""}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Header mostrarBarraBusqueda={mostrarBarraBusqueda} />
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Home videosUse={videosUse} formaciones={formacionesUse} />
            }
          />
          {/* Favoritos */}
          <Route path="/favoritos" element={<Favoritos />} />
          {/* Videos */}
          <Route path="/video/:id" element={<Video videosUse={videosUse} />} />
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
                actualizarVideo={actualizarVideo}
                actualizarFormacion={actualizarFormacion}
              />
            }
          />
          {/* Error 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  transition: transform 0.3s ease;
`;