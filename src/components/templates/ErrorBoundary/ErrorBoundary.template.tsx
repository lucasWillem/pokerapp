import { memo, ReactNode, FC } from "react";

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import {
  StyledErrorBoundaryWrapper,
  StyledErrorFallback,
  StyledAlertHeading,
  StyledMessage,
} from "./ErrorBoundary.styles";

import { Button } from "@/components/library/Button";
import { ColorOptions } from "@/global/theme";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <StyledErrorFallback>
      <StyledAlertHeading>Something went wrong:</StyledAlertHeading>
      <StyledMessage>{`${error.message.substring(0, 50)}...`}</StyledMessage>
      <div>
        <Button onClick={resetErrorBoundary} color={ColorOptions.Red}>
          Try again
        </Button>
      </div>
    </StyledErrorFallback>
  );
};

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <StyledErrorBoundaryWrapper>
      <ReactErrorBoundary
        onReset={() => window.location.reload()}
        FallbackComponent={ErrorFallback}
      >
        {children}
      </ReactErrorBoundary>
    </StyledErrorBoundaryWrapper>
  );
};

export default memo(ErrorBoundary);
