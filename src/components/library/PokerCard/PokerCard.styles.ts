import styled, { css } from 'styled-components';

const StyledCard = styled.div(() =>
  css({
    height: '100px',
    width: '70px',
    borderRadius: '2px',
    backgroundColor: '#f8f8f8',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
);

const TopRow = styled.div(() =>
  css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '5px',
  }),
);

const MiddleRow = styled.div(() =>
  css({
    display: 'flex',
    justifyContent: 'center',
  }),
);

const BottomRow = styled.div(() =>
  css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '5px',
  }),
);

export { StyledCard, TopRow, MiddleRow, BottomRow };
