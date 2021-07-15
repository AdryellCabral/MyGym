import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  small?: boolean;
  backgroundColor?: string;
  onClick: () => void;
}

const PurpleButton = ({ children, small = false, backgroundColor, ...rest }: Props) => {
  return (
    <StyledButton
      backgroundColor = { backgroundColor }
      small={small} {...rest}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default PurpleButton;