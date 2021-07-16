import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  small?: boolean;
  backgroundColor?: string;
  type?: any;
  onClick?: () => void;
}

const PurpleButton = ({
  children,
  small = false,
  backgroundColor,
  type = "",
  ...rest
}: Props) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      small={small}
      type={type}
      {...rest}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default PurpleButton;
