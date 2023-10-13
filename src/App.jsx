import { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Header, Footer, Busqueda } from "./components";

import { videos } from "./assets/data/videos";
import { formaciones } from "./assets/data/formaciones";
import AnimatedRoutes from "./components/AnimatedRoutes";

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
            favorito: videoActualizado.favorito,
          }
        : video
    );
    actualizarVideos(videosActualizados);
  };

  //Actualizar formacion video
  const actualizarFormacionVideo = (videosAEditar, formacion) => {
    videosAEditar.forEach((video) => {
      video.formacion = formacion;
      actualizarVideo(video);
    });
  };

  //Actualizar fav video
  const actualizarFav = (video, favorito) => {
    video.favorito = favorito;
    actualizarVideo(video);
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
        <Busqueda
          videosUse={videosUse}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
        />
        <Header mostrarBarraBusqueda={mostrarBarraBusqueda} />
        <AnimatedRoutes
          videosUse={videosUse}
          formacionesUse={formacionesUse}
          agregarVideo={agregarVideo}
          eliminarVideo={eliminarVideo}
          actualizarVideo={actualizarVideo}
          actualizarFormacionVideo={actualizarFormacionVideo}
          actualizarFav={actualizarFav}
          agregarFormacion={agregarFormacion}
          eliminarFormacion={eliminarFormacion}
          actualizarFormacion={actualizarFormacion}
        />
        <Footer />
      </BrowserRouter>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  transition: transform 0.3s ease;
`;
