import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import Card from "./Card";
import CardList from "./CardList";
import CardExercice from "./CardExercice";
import { useWindowWidth } from "../../../providers/WindowWidth";
import { useStudent } from "../../../providers/Student";

const WorkoutStudent = () => {
  const param = useParams();
  const { id } = useParams<{ id?: any }>();

  const { windowWidth } = useWindowWidth();
  const { student} = useStudent();
  const [workout, setWorkout] = useState<any>({})
  const [test] = useState([
    {
      id: 1,
      img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
      group: "Braço",
      description:
        "Essa desrição é um test, talvez ela fique bem maior, é bom testar com um texto bem grande",
      repetition: 2,
      exercices: [
        {
          id: 1,
          name: "Supino",
          group: "Braço",
          description:
            "Essa desrição é um test, talvez ela fique bem maior, é bom testar com um texto bem grande",
          img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
          video:
            "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
        },
      ],
    },
  ]);

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

  useEffect(() => {
    
      const currentWorkout = student?.workouts.filter((workoutFilter:any) => workoutFilter.id === parseInt(id))
      console.log(currentWorkout)
      setWorkout(currentWorkout[0])
  },[])

  const [objTest] = useState([
    {
      id: 1,
      name: "Supino",
      group: "Braço",
      description: "Essa desrição é um test",
      img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
      video:
        "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
    },
    {
      id: 2,
      name: "Supino",
      group: "Braço",
      description: "Essa desrição é um test",
      img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
      video:
        "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
    },
  ]);

  if (windowWidth < 1200) {
    return (
      <section className="workout">
        <Container>
          <Card
            group={workout?.group}
            description={GroupDescription[workout?.group]?.description}
            img={GroupDescription[workout?.group]?.img}
          />
          <h1 className="title">Exercícios</h1>
          <CardList>
            <>
              {workout?.exercices?.map((exercice:any) => (
                <CardExercice exercice={exercice} />
              ))}
            </>
          </CardList>

          <div className="check--workout">
            <input type="checkbox" name="" id="" />
            <span>Treino Concluído</span>
          </div>
        </Container>
      </section>
    );
  } else {
    return (
      <section className="workout">
        <Container>
          <div className="info">
            <Card 
              group={workout?.group}
              description={GroupDescription[workout?.group]?.description}
              img={GroupDescription[workout?.group]?.img}
            />
            <div className="container--right">
              <span className="rpt">Repetições: 2x</span>
              <div className="check--workout">
                <input type="checkbox" name="" id="" />
                <span>Treino Concluído</span>
              </div>
            </div>
          </div>

          <h1 className="title">Exercícios</h1>
          <CardList>
            <>
              {workout?.exercices?.map((exercice:any) => (
                <CardExercice exercice={exercice} />
              ))}
            </>
          </CardList>
        </Container>
      </section>
    );
  }
};

export default WorkoutStudent;
