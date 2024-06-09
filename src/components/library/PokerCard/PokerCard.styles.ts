import styled from "styled-components";

const StyledCard = styled.div`
  height: 100px;
  width: 70px;
  border-radius: 2px;
  background-color: #f8f8f8;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`;

const MiddleRow = styled.div`
  display: 'flex', justifyContent: 'center'
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
`;
export { StyledCard, TopRow, MiddleRow, BottomRow };
