import { useContext } from "react";
import { MainContext } from "./../../context/MainContext";
import styled from "styled-components";
import FormacionItem from "./FormacionItem";

export default function Category() {
  const { formacionesUse } = useContext(MainContext);
  return (
    <CategoryContainer>
      {formacionesUse.map((item) => {
        return (
          <FormacionItem
            key={item.id}
            name={item.name}
            color={item.color}
            icon={item.icon}
          />
        );
      })}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 16px;
  padding: 16px 36px;
  @media (max-width: 425px) {
    padding: 16px;
  }
`;
