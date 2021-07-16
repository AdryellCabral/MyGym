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

  const GroupDescription:any = {
    Peito: {
      img: "https://s6.gifyu.com/images/peito.jpg",
      description:
        "O peitoral é um grupo muscular que está dividido em dois músculos principais: o peitoral maior e o peitoral menor. Geralmente, o grupo que é trabalhado na academia e para fins estéticos é o peitoral maior.",
    },
    Ombro: {
      img: "https://s6.gifyu.com/images/ombro.jpg",
      description:
        "O ombro é a articulação complexa que liga a cintura escapular ao membro superior. É formado por quatro articulações separadas e por um complexo de músculos.",
    },
    Braços: {
      img: "https://s6.gifyu.com/images/braco.webp",
      description:
        "Os músculos do braço atuam nas articulações do cotovelo e do ombro para gerar os vários movimentos do antebraço. Cinco músculos do braço desempenham um papel nesses movimentos: bíceps (bicípite)  braquial, braquial, coracobraquial, tríceps (tricípite) braquial e ancôneo.",
    },
    Abdomem: {
      img: "https://s6.gifyu.com/images/abdomen.jpg",
      description:
        "Músculos do abdômen são os músculos anteriores e laterais do tronco. Além de funcionarem como sustentadores das vísceras abdominais e da respiração ocupam-se com movimento do tronco de flexão, encurvamento lateral e rotação. Além disso, protegem os órgãos internos contrachoques mecânicos.",
    },
    Pernas: {
      img: "https://s6.gifyu.com/images/perna.jpg",
      description:
        "Nossos membros inferiores são divididos, popularmente, em: músculos da perna e músculos dos glúteos. Sem eles você não seria capaz de caminhar até a sua aula favorita, pular, correr, ficar de pé, agachar, etc.",
    },
    Costas: {
      img: "https://s6.gifyu.com/images/costas.jpg",
      description:
        "As costas desempenham um papel importante na forma como todo o corpo funciona. Em virtude de suas inserções à coluna vertebral, as costas integram a atividade dos membros inferiores, membros superiores, coluna vertebral e pelve.",
    },
  };
  
  console.log(workout)
  const handleWorkout = () => {
    history.push(`/workout/${workout.id}`);
  };
  const group = workout.group
  return (
    <Container img={GroupDescription[group].img} onClick={() => handleWorkout()}>
      <div className="image"></div>
      <div className="info">
        <h1>{workout.group}</h1>
        <p>{GroupDescription[group].description}</p>
      </div>
    </Container>
  );
};

export default Card;
