import { useHistory } from "react-router-dom";
import { Container, Button } from "./styles";

interface CardGetProductProps {
  plan: { id: number; title: string; description: string; price: number };
}

const CardGetProduct = ({ plan }: CardGetProductProps) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/register");
  };
  return (
    <Container>
      <h1>{plan.title}</h1>
      <p>{plan.description}</p>
      <span>R$ {plan.price}</span>
      <Button onClick={() => handleClick()}>
        <span>GET</span>
      </Button>
    </Container>
  );
};

export default CardGetProduct;
