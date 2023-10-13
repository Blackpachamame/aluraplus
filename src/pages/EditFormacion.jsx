import { useContext } from "react";
import { MainContext } from "./../context/MainContext";
import styled from "styled-components";
import { FormFormacion } from "./../components";
import { motion } from "framer-motion";

function obtenerFormacion(slice, formaciones) {
  const url = new URL(window.location).pathname;
  const id = url.slice(slice);
  const unaFormacion = formaciones.filter((formacion) => formacion.id === id);
  return unaFormacion;
}

export default function EditFormacion() {
  const { formacionesUse } = useContext(MainContext);
  const formacion = obtenerFormacion(18, formacionesUse)[0];

  return (
    <StyledMain
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Editar Formacion</h1>
      <FormFormacion datosDeFormacion={formacion} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    margin-bottom: 10px;
    text-align: center;
  }
  @media (max-width: 425px) {
    padding: 16px;
  }
  @media (max-width: 375px) {
    padding: 16px 0;
  }
`;
