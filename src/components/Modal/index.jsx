import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

export default function Modal({ open, onClose, url, tipo, text, editado }) {
  const type = tipo ? tipo : "text";
  if (!open) return null;
  return (
    <ContainerModal onClick={type === "video" ? onClose : null}>
      {type === "video" ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <ReactPlayer
            className="video__play"
            url={url}
            width="100%"
            height="100%"
            playing={true}
            controls={true}
          />
        </div>
      ) : (
        <div className="modalFormulario">
          <h4>{text}</h4>
          <div className="containerBtn">
            <Link to="/" className="video__volver">
              Ir al Home
            </Link>
            {editado ? (
              <Link
                to={type === "formacion" ? "/formacion/lista" : "/video/lista"}
                className="video__agregar"
                onClick={onClose}
              >
                {type === "formacion" ? "Lista formaciones" : "Lista videos"}
              </Link>
            ) : (
              <button className="video__agregar" onClick={onClose}>
                Agregar más
              </button>
            )}
          </div>
        </div>
      )}
    </ContainerModal>
  );
}

const ContainerModal = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  .containerBtn {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .video__volver,
  .video__agregar {
    font-size: 18px;
    font-weight: 700;
    padding: 14px 22px;
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .video__agregar {
    color: var(--color-black-ultra-dark);
    background: var(--color-secondary);
    &:hover {
      border: 2px solid var(--color-primary);
      background: var(--color-primary);
    }
  }
  .video__volver {
    color: var(--color-secondary);
    background: var(--color-black-dark);
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-ultra-dark);
    }
  }

  .modalContainer,
  .modalFormulario {
    border-radius: 10px;
    box-shadow: var(--color-secondary) 0px 0px 10px 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }
  .modalContainer {
    max-width: 640px;
    width: 100%;
    height: 360px;
  }
  .modalFormulario {
    max-width: 640px;
    width: 100%;
    height: 250px;
    background-color: var(--color-black-ultra-dark);
    padding: 20px;
    display: grid;
    place-content: center;
    text-align: center;
  }
  @media (max-width: 730px) {
    .modalContainer {
      max-width: 480px;
      width: 100%;
      height: 270px;
    }
  }
  @media (max-width: 530px) {
    .modalContainer {
      max-width: 360px;
      width: 100%;
      height: 203px;
    }
  }
`;

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  url: PropTypes.string,
  tipo: PropTypes.string,
  text: PropTypes.string,
  editado: PropTypes.bool,
};
