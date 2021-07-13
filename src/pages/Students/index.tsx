import { Container } from "./styles";
import CardList from "./CardList";
import Card from "./Card";
import { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';

interface Student {
  id: number;
  name: string;
  description: string;
  img: string;
}

const Students = () => {
  const [filter, setFilter] = useState("")
  const [objTest] = useState([
    {
      id: 1,
      name: "João Frango",
      description: "Essa descrição é um test",
      img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
      
    },
    {
      id: 2,
      name: "João Maromba",
      description: "Essa descrição é um test",
      img: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg",
      
    },
  ]);
  const filterGroup = (group: string) => {
    console.log(group);
  };
  return (
    <section className="page--students" style={{ width: "100%" }}>
      <Container>
        <div className="container--top">
          <h1>Alunos</h1>
          <div className="container--filter">
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)}/>
            <button ><SearchIcon/></button>
          </div>
        </div>

        <CardList>
          <>
            {objTest.map((item) => (
              <Card key={item.id} student={item} />
            ))}
          </>
        </CardList>
      </Container>
    </section>
  );
};

export default Students;
