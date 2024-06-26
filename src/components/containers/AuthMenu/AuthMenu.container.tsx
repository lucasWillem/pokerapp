import { FC, memo } from "react";

import { NavLink } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/library/Button";
import { ColorOptions } from "@/global/theme";
import { useStoreActions } from "@/redux/index";
import { useCheckIfUser } from "@/authentication/useCheckIfUser";

import { RoutePaths } from "@/routing/index";

import { StyledAuthMenu } from "./AuthMenu.styles";

const AuthMenu: FC = () => {
  const handleLogout = () => {
    clearUser();
    clearHands();
    clearWinners();
    navigate(RoutePaths.Login);
  };

  const clearUser = useStoreActions((actions) => actions.user.clearUser);

  const clearWinners = useStoreActions(
    (actions) => actions.winners.clearWinners,
  );

  const clearHands = useStoreActions(
    (actions) => actions.playersHands.clearPokerHands,
  );

  const navigate = useNavigate();

  const isAuthenticated = useCheckIfUser();

  return (
    <>
      {isAuthenticated && (
        <StyledAuthMenu>
          <StyledAuthMenu.Toggle as={NavLink}>
            <Button>
              <FaBars size={16} />
            </Button>
          </StyledAuthMenu.Toggle>
          <StyledAuthMenu.Menu>
            <Button color={ColorOptions.Red} onClick={handleLogout}>
              Logout
            </Button>
          </StyledAuthMenu.Menu>
        </StyledAuthMenu>
      )}
    </>
  );
};

export default memo(AuthMenu);
