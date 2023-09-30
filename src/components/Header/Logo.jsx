import styled from "styled-components";
import logo from "../../assets/images/logo/logoAlura.svg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function Logo() {
  return (
    <StyledLogoContainer>
      <img src={logo} alt="Logo Alura" />
      <MdOutlineSlowMotionVideo />
    </StyledLogoContainer>
  );
}

const StyledLogoContainer = styled.div`
  color: var(--color-primary);
  display: flex;
  gap: 5px;
  img {
    width: 20px;
  }
`;
