import styled from "styled-components";

const StyledPokerTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)
`;

export { StyledPokerTable };
