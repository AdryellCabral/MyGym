import { Container } from "./styles";
import { useHistory } from "react-router-dom";

interface Exercice {
  id: number;
  name: string;
  group: string;
  description: string;
  img: string;
  video: string;
}

interface Workout {
  workout: {
    id: number;
    img: string;
    group: string;
    description: string;
    repetition: number;
    exercices: Exercice[];
  };
}
const Card = ({ workout }: Workout) => {
  const history = useHistory();

  const handleWorkout = () => {
    history.push(`/workouts/${workout.id}`);
  };
  return (
    <Container img={workout.img} onClick={() => handleWorkout()}>
      <div className="image"></div>
      <div className="info">
        <h1>{workout.group}</h1>
        <p>{workout.description}</p>
        <span>Repetições: {workout.repetition}x</span>
      </div>
    </Container>
  );
};

export default Card;
