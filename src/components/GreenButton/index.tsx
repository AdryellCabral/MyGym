import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  small?: boolean;
  type?: any;
  onClick?: () => void;
}

const GreenButton = ({
  children,
  small = false,
  type = "",
  ...rest
}: Props) => {
  return (
    <StyledButton small={small} {...rest} type={type}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default GreenButton;
