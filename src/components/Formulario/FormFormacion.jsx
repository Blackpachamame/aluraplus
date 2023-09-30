import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Campo from "./Campo";
import Modal from "../Modal";
import { v4 as uuidv4 } from "uuid";

const FormFormacion = ({
  agregarFormacion,
  actualizarVideo,
  datosVideos,
  datosFormaciones,
  actualizarFormacion,
}) => {
  const [icon, updateIcon] = useState(datosVideos ? datosFormaciones.icon : "");
  const [name, updateName] = useState(datosVideos ? datosFormaciones.name : "");
  const [color, updateColor] = useState(
    datosVideos ? datosFormaciones.color : ""
  );
  const [openModal, setOpenModal] = useState(false);
  const handleCrear = (evento) => {
    evento.preventDefault();

    let datosAEnviar = {
      id: uuidv4(),
      name,
      icon,
      color,
    };

    agregarFormacion(datosAEnviar);
  };

  const handleEditar = (evento) => {
    evento.preventDefault();

    let datosAEditar = {
      id: datosFormaciones.id,
      name,
      icon,
      color,
    };

    actualizarFormacion(datosAEditar);
    updateVideos();
  };

  function updateVideos() {
    for (let i = 0; i < datosVideos.length; i++) {
      if (datosVideos[i].formacion === datosFormaciones.name) {
        let datosAEditarVideo = {
          id: datosVideos[i].id,
          urlVideo: datosVideos[i].urlVideo,
          imgVideo: datosVideos[i].imgVideo,
          formacion: name,
          title: datosVideos[i].title,
          descripcion: datosVideos[i].descripcion,
        };
        actualizarVideo(datosAEditarVideo);
      }
    }
  }

  return (
    <ContainerForm>
      <form onSubmit={datosVideos ? handleEditar : handleCrear}>
        <Campo
          label="Icono"
          placeholder="Url del icono"
          required
          valor={icon}
          actualizarValor={updateIcon}
        />
        <Campo
          label="Nombre"
          placeholder="Nombre de la formación"
          required
          valor={name}
          actualizarValor={updateName}
        />
        <Campo
          label="Color"
          placeholder="Seleccionar color"
          required
          valor={color}
          actualizarValor={updateColor}
          type="color"
          className="campo__color"
        />
        <button className="boton" onClick={() => setOpenModal(true)}>
          {datosVideos ? "Editar" : "Agregar"}
        </button>
      </form>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        tipo={"formacion"}
        text={
          datosVideos
            ? "Datos editados correctamente"
            : "Formacion agregada correctamente"
        }
        editado={datosVideos ? true : false}
      />
    </ContainerForm>
  );
};

export default FormFormacion;

const ContainerForm = styled.section`
  max-width: 600px;
  width: 100%;
  margin-bottom: 32px;
  form {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 32px;
    border: 2px solid var(--color-black-medium);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h3 {
    margin-bottom: 16px;
  }

  .boton {
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    padding: 14px 22px;
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    background: var(--color-secondary);
    &:hover {
      border: 2px solid var(--color-primary);
      background: var(--color-primary);
    }
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 375px) {
    form {
      background-color: transparent;
      padding: 16px;
      border: none;
      border-radius: 0;
    }
  }
`;

FormFormacion.propTypes = {
  agregarFormacion: PropTypes.func,
  actualizarVideo: PropTypes.func,
  datosVideos: PropTypes.array,
  datosFormaciones: PropTypes.object,
  actualizarFormacion: PropTypes.func,
};
