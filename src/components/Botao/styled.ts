import styled from "styled-components";

export const Bt = styled.button`
  width: 150px;
  height: 30px;
  background-color: #3939ac;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #5353c6;
  }
  @media (max-width: 1024px){
    line-height: 30px;
  }

  @media (max-width: 700px){
    line-height: 30px;
  }
`;
