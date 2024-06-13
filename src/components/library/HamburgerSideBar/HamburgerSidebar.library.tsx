import { useState, FC, memo } from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import {
  SideBarColors,
  StyledOffcanvas,
  StyledSidebar,
} from './HamburgerSidebar.styles';
import { Button } from '@components/library/Button';
import { ButtonColors } from '@components/library/Button/Button.styles';
import { useStoreActions } from '@redux/typed-hooks';

const HamburgerSidebar: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clearUser = useStoreActions((actions) => actions.user.clearUser);

  const transform = show ? `translateX(0)` : `translateX(-100%)`;

  const springValue = useSpring({
    transform,
    from: { transform: `translateX(-100%)` },
    config: { duration: 8000 },
  });

  const handleLogout = () => {
    handleClose();
    clearUser();
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Button
        borderColor={ButtonColors.Red}
        style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          padding: '8px',
          cursor: 'pointer',
        }}
        onClick={handleShow}
      >
        <FaBars size={16} />
      </Button>

      <animated.div style={springValue}>
        {show && (
          <StyledSidebar>
            <StyledOffcanvas
              show={show}
              onHide={handleClose}
              color={SideBarColors.Green}
            >
              <Offcanvas.Body>
                <Nav>
                  <Button onClick={handleLogout}>Logout</Button>
                </Nav>
              </Offcanvas.Body>
            </StyledOffcanvas>
          </StyledSidebar>
        )}
      </animated.div>
    </div>
  );
};

export default memo(HamburgerSidebar);
