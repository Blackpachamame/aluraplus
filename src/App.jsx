import { useState, useEffect, useContext } from "react";
import { MainContext } from "./context/MainContext";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Header, Footer, Busqueda } from "./components";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const mostrarBarraBusqueda = () => {
    setToggleSearch(!toggleSearch);
  };

  const { videosUse, formacionesUse } = useContext(MainContext);

  useEffect(() => {
    localStorage.setItem("videosUse", JSON.stringify(videosUse));
  }, [videosUse]);
  useEffect(() => {
    localStorage.setItem("formacionesUse", JSON.stringify(formacionesUse));
  }, [formacionesUse]);

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
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  transition: transform 0.3s ease;
`;
