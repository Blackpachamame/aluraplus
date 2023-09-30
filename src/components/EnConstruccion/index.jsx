import styled from "styled-components";
import { BsTools } from "react-icons/bs";

export default function EnConstruccion() {
  return (
    <StyledMain>
      <h1>
        <BsTools /> En construcción...
      </h1>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;
  place-content: center;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;
