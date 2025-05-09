import styled from "styled-components";

let SharedButton = styled.button`
  background-color: #30324d;
  color: white;
  border: none;
  padding: 0.5rem 0.75rem;
  margin: 1rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: white;
    border: 1px solid #4d4d57;
    color: #000000;
  }
`;
export { SharedButton };
