import { useContext } from "react";
import { MainContext } from "./../context/MainContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ListFormaciones() {
  const { formacionesUse, eliminarFormacion } = useContext(MainContext);
  return (
    <StyledMain
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Lista de Formaciones</h1>
      <div className="formacion__table-container">
        <StyledTable>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Icono</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {formacionesUse.map((formacion) => (
              <tr key={formacion.id}>
                <td>{formacion.name}</td>
                <td className="formacion__icono">
                  <img src={formacion.icon} alt="" width="30px" height="30px" />
                </td>
                <ContainerAcciones>
                  <Link
                    to={`/formacion/editar/${formacion.id}`}
                    className="formacion__editar"
                  >
                    <BsPencilFill />
                  </Link>
                  <button
                    onClick={() => eliminarFormacion(formacion.id)}
                    className="formacion__eliminar"
                  >
                    <BsTrashFill />
                  </button>
                </ContainerAcciones>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
      <Link to="/formacion/agregar" className="formacion__agregar">
        Agregar formación
      </Link>
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

  .formacion__table-container {
    width: 100%;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    overflow-x: auto;
  }

  .formacion__agregar {
    font-size: 18px;
    font-weight: 700;
    margin-top: 32px;
    padding: 14px 22px;
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .formacion__agregar {
    color: var(--color-black-ultra-dark);
    background: var(--color-secondary);
    &:hover {
      border: 2px solid var(--color-primary);
      background: var(--color-primary);
    }
  }

  @media (max-width: 425px) {
    padding: 16px;
  }
  @media (max-width: 375px) {
    padding: 16px 0;
    .formacion__table-container {
      justify-content: flex-start;
    }
  }
`;

const StyledTable = styled.table`
  td,
  th {
    padding: 8px;
  }
  td:not(:first-of-type) {
    text-align: center;
  }
  th:first-of-type {
    text-align: left;
  }

  td.formacion__icono img {
    width: 100%;
  }

  tr {
    background-color: var(--color-black-light);
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--color-black-medium);
    color: var(--color-white);
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const ContainerAcciones = styled.td`
  min-width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .formacion__editar,
  .formacion__eliminar {
    font-size: 16px;
    padding: 8px;
    color: var(--color-secondary);
    background: var(--color-black-ultra-dark);
    border: 2px solid var(--color-secondary);
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-medium);
    }
  }
`;
