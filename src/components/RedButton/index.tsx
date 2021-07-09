import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  size: string;
  onClick: () => void;
}

const RedButton = ({ children, size, ...rest }: Props) => {
  return (
    <StyledButton widht={size} {...rest}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default RedButton;
