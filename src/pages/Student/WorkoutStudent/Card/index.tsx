import { Container } from "./styles";

interface Workout {
  group: string;
  description: string;
  img: string;
}

const Card = ({ group, description, img }: Workout) => {
  return (
    <Container img={img}>
      <div className="image"></div>
      <div className="info">
        <h1>{group}</h1>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default Card;
