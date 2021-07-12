import { Container } from "./styles";

interface CardAppProps {
  backgroundUrl: string;
}

const CardImageApp = ({ backgroundUrl }: CardAppProps) => {
  return <Container backgroundUrl={backgroundUrl} />;
};

export default CardImageApp;
