import { memo, FC, ReactNode } from "react";

import { StyledPokerTable } from "./PokerTable.styles";

type PokerTableProps = {
  children: ReactNode;
};

const PokerTable: FC<PokerTableProps> = ({ children }) => {
  return <StyledPokerTable>{children}</StyledPokerTable>;
};

export default memo(PokerTable);
