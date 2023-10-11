import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { avatar } from "../../assets/images";

export default function Perfil() {
  const [openPerfil, setOpenPerfil] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handleMenuPerfil = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenPerfil(false);
      }
    };

    document.addEventListener("mousedown", handleMenuPerfil);

    return () => {
      document.removeEventListener("mousedown", handleMenuPerfil);
    };
  });

  const menu = [
    {
      name: "Videos",
      link: "/video/lista",
    },
    {
      name: "Nuevo video",
      link: "/video/agregar",
    },
    {
      name: "Formaciones",
      link: "/formacion/lista",
    },
    {
      name: "Nueva formación",
      link: "/formacion/agregar",
    },
    {
      name: "Logout",
      link: "/",
    },
  ];

  return (
    <StyledNavRight ref={menuRef}>
      <StyledContainerPerfil onClick={() => setOpenPerfil(!openPerfil)}>
        <img src={avatar} alt="Imagen de perfil" width="44" height="44" />
        {openPerfil ? (
          <StyledDropdown>
            {menu.map((item) => (
              <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </StyledDropdown>
        ) : null}
      </StyledContainerPerfil>
    </StyledNavRight>
  );
}

const StyledNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledContainerPerfil = styled.div`
  width: 44px;
  height: 44px;
  position: relative;
  img {
    border-radius: 100%;
    cursor: pointer;
  }
`;

const StyledDropdown = styled.ul`
  width: 160px;
  text-align: end;
  padding-block: 6px;
  background-color: var(--color-black-medium);
  border: 1px solid var(--color-gray-medium);
  border-radius: 4px;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 10;
  & li {
    font-family: var(--ff-title);
    font-weight: 600;
    font-size: 15px;
    color: var(--color-white);
    margin-block: 3px;
    padding-inline: 16px;
    padding-block: 10px;
    list-style: none;
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: var(--color-black-dark);
    }
  }
  & li a {
    width: 100%;
    display: inline-block;
  }
  @media (max-width: 425px) {
    right: 16px;
  }
`;
