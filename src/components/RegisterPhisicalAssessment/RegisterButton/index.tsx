import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  small?: boolean;
  backgroundColor?: string;
  onClick: () => void;
}

const PurpleButton = ({ children, backgroundColor, ...rest }: Props) => {
  return (
    <StyledButton backgroundColor={backgroundColor} {...rest}>
      {children}
    </StyledButton>
  );
};

export default PurpleButton;
