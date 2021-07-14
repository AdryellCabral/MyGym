import { ReactNode } from "react";
import { Container } from "./styles";

interface CardListProps {
  children: ReactNode;
}
const CardList = ({ children }: CardListProps) => {
  return <Container>{children}</Container>;
};

export default CardList;
