import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  small?: boolean;
  backgroundColor?: string;
  func: () => void;
}

const PurpleButton = ({
  children,
  small = false,
  backgroundColor,
  func,
  ...rest
}: Props) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      small={small}
      {...rest}
      type="submit"
      onClick={func}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default PurpleButton;
