import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Perfil() {
  const [toggle, setToggle] = useState(false);
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
    <StyledNavRight>
      <StyledContainerPerfil onClick={() => setToggle(!toggle)}>
        <img src="https://static.vecteezy.com/system/resources/previews/004/819/323/non_2x/hipster-avatar-icon-of-bearded-man-in-glasses-vector.jpg" />
        {toggle ? (
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
    width: 44px;
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
  z-index: 1;
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
