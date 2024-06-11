import { memo, ReactNode, FC } from 'react';
import { StyledScreenTemplate } from './ScreenTemplate.styles';

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenTemplate: FC<ScreenWrapperProps> = ({ children }) => {
  return <StyledScreenTemplate fluid>{children}</StyledScreenTemplate>;
};

export default memo(ScreenTemplate);
