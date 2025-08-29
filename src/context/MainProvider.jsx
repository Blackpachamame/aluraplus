import { useState } from 'react';
import PropTypes from 'prop-types';
import { MainContext } from './MainContext';

import { videos } from '../assets/data/videos';
import { formaciones } from '../assets/data/formaciones';

export const MainProvider = ({ children }) => {
  function getInitialVideos() {
    const savedVideos = localStorage.getItem('videosUse');
    return savedVideos ? JSON.parse(savedVideos) : videos;
  }
  function getInitialFormaciones() {
    const savedFormaciones = localStorage.getItem('formacionesUse');
    return savedFormaciones ? JSON.parse(savedFormaciones) : formaciones;
  }

  const [videosUse, actualizarVideos] = useState(getInitialVideos);
  const [formacionesUse, actualizarFormaciones] = useState(getInitialFormaciones);
  const agregarVideo = (video) => {
    actualizarVideos([...videosUse, video]);
  };
  const eliminarVideo = (id) => {
    const nuevosVideos = videosUse.filter((video) => video.id !== id);
    actualizarVideos(nuevosVideos);
  };
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
        : video,
    );
    actualizarVideos(videosActualizados);
  };
  const actualizarFormacionVideo = (videosAEditar, formacion) => {
    videosAEditar.forEach((video) => {
      video.formacion = formacion;
      actualizarVideo(video);
    });
  };
  const actualizarFav = (video, favorito) => {
    video.favorito = favorito;
    actualizarVideo(video);
  };
  const agregarFormacion = (nuevaFormacion) => {
    actualizarFormaciones([...formacionesUse, nuevaFormacion]);
  };
  const eliminarFormacion = (id) => {
    const nuevosformaciones = formacionesUse.filter((formacion) => formacion.id !== id);
    actualizarFormaciones(nuevosformaciones);
  };
  const actualizarFormacion = (formacionActualizada) => {
    const formacionesActualizados = formacionesUse.map((formacion) =>
      formacionActualizada.id === formacion.id
        ? {
            ...formacion,
            name: formacionActualizada.name,
            color: formacionActualizada.color,
            icon: formacionActualizada.icon,
          }
        : formacion,
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
      }}>
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.any,
};
