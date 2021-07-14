import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import Card from "./Card";
import CardList from "./CardList";
import CardExercice from "./CardExercice";
import { useWindowWidth } from "../../../providers/WindowWidth";

const WorkoutStudent = () => {
  const param = useParams();

  const { windowWidth } = useWindowWidth();

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
            group={test[0].group}
            description={test[0].description}
            img={test[0].img}
          />
          <h1 className="title">Exercícios</h1>
          <CardList>
            <>
              {objTest.map((exercice) => (
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
              group={test[0].group}
              description={test[0].description}
              img={test[0].img}
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
              {objTest.map((exercice) => (
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
