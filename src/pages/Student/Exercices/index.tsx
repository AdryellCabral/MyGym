import { Container } from "./styles";
import SelectFilter from "../../../components/SelectFilter";
import CardList from "./CardList";
import Card from "./Card";
import { useState } from "react";

interface Exercice {
  id: number;
  name: string;
  group: string;
  description: string;
  img: string;
  video: string;
}

const Exercices = () => {
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
  const filterGroup = (group: string) => {
    console.log(group);
  };
  return (
    <section className="page--exercices" style={{ width: "100%" }}>
      <Container>
        <div className="container--top">
          <h1>Exercícios</h1>
          <div className="container--filter">
            <span>Filtrar:</span>
            <SelectFilter onChangeOption={filterGroup} />
          </div>
        </div>

        <CardList>
          <>
            {objTest.map((item) => (
              <Card key={item.id} exercice={item} />
            ))}
          </>
        </CardList>
      </Container>
    </section>
  );
};

export default Exercices;
