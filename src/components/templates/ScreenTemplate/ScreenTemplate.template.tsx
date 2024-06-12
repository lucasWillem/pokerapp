import { memo, ReactNode, FC, CSSProperties } from 'react';
import { StyledScreenTemplate } from './ScreenTemplate.styles';

interface ScreenWrapperProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

const ScreenTemplate: FC<ScreenWrapperProps> = ({
  children,
  containerStyle,
}) => {
  return (
    <StyledScreenTemplate style={containerStyle} fluid>
      {children}
    </StyledScreenTemplate>
  );
};

export default memo(ScreenTemplate);
