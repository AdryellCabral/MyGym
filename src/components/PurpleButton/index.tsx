import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  small?: boolean;
  onClick: () => void;
}

const PurpleButton = ({ children, small = false, ...rest }: Props) => {
  return (
    <StyledButton small={small} {...rest}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default PurpleButton;
