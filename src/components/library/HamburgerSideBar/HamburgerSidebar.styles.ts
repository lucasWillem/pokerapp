import { Container, Offcanvas } from 'react-bootstrap';
import { styled, css } from 'styled-components';

export enum SideBarColors {
  Black = 'black',
  Green = 'green',
  Gold = 'gold',
  Light = 'light',
  Red = 'red',
}

export interface StyledOffCanvasProps {
  color?: SideBarColors;
  borderColor?: SideBarColors;
}

const StyledOffcanvas = styled(Offcanvas)<StyledOffCanvasProps>(
  ({ theme, color = SideBarColors.Red }) =>
    css({
      '.offcanvas-body': {
        backgroundColor: theme.colors[color],
        color: theme.colors[color],
      },
    }),
);

const StyledSidebar = styled(Container)<StyledOffCanvasProps>(() =>
  css({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  }),
);

export { StyledOffcanvas, StyledSidebar };
