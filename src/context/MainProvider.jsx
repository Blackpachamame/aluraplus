import { useState } from "react";
import PropTypes from "prop-types";
import { MainContext } from "./MainContext";

import { videos } from "../assets/data/videos";
import { formaciones } from "../assets/data/formaciones";

export const MainProvider = ({ children }) => {
  const [videosUse, actualizarVideos] = useState(getInitialVideos);
  const [formacionesUse, actualizarFormaciones] = useState(
    getInitialFormaciones
  );

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
    <MainContext.Provider
      value={{
        videosUse,
        actualizarVideos,
        formacionesUse,
        actualizarFormaciones,
        agregarVideo,
        eliminarVideo,
        actualizarVideo,
        actualizarFormacionVideo,
        actualizarFav,
        agregarFormacion,
        eliminarFormacion,
        actualizarFormacion,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.any,
};
