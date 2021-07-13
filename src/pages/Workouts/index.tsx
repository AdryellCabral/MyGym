import { Container } from "./styles";
import SelectFilter from "../../components/SelectFilter";
import CardList from "./CardList";
import Card from "./Card";
import { useState } from "react";
const Workouts = () => {
  const filterGroup = (group: string) => {
    console.log(group);
  };

  const [test] = useState([
    {
      id: 1,
      img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
      group: "Braço",
      description: "Essa descrição é um test",
      repetition: 2,
      exercices: [
        {
          id: 1,
          name: "Supino",
          group: "Braço",
          description: "Essa desrição é um test",
          img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
          video:
            "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
        },
      ],
    },
    {
      id: 2,
      img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
      group: "Braço",
      description: "Essa descrição é um test",
      repetition: 2,
      exercices: [
        {
          id: 1,
          name: "Supino",
          group: "Braço",
          description: "Essa desrição é um test",
          img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
          video:
            "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
        },
      ],
    },
  ]);

  return (
    <section className="workouts">
      <Container>
        <div className="container--top">
          <h1>Treinos</h1>
          <div className="container--filter">
            <span>Filtrar:</span>
            <SelectFilter onChangeOption={filterGroup} />
          </div>
        </div>

        <CardList>
          <>
            {test.map((treino) => (
              <Card key={treino.id} workout={treino} />
            ))}
          </>
        </CardList>
      </Container>
    </section>
  );
};

export default Workouts;
