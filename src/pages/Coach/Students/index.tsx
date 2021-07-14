import { Container } from "./styles";
import CardList from "./CardList";
import Card from "./Card";
import { useEffect, useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { apiMyGym } from "../../../services/api";
import { useCoach } from "../../../providers/Coach";

const Students = () => {
  const [filter, setFilter] = useState("");
  const {coachAuthInfo} = useCoach();
  const [students, setStudents] = useState({})
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

  const GetStudents = () => {
    apiMyGym
      .get(`students?coachId=${coachAuthInfo.id}`, {
        headers: {
          Authorization: `Bearer ${coachAuthInfo.token}`,
        }
      })
      .then((response) => setStudents(response))
  }

  useEffect(() => {
    GetStudents();
  },[])

  const filterStudent = () => {
    apiMyGym
      .get(`students?name=${filter}&coachId=${coachAuthInfo.id}`, {
        headers: {
          Authorization: `Bearer ${coachAuthInfo.token}`,
        }
      })
      .then((response) => setStudents(response))
  };
  return (
    <section className="page--students" style={{ width: "100%" }}>
      <Container>
        <div className="container--top">
          <h1>Alunos</h1>
          <div className="container--filter">
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)}/>
            <button onClick={filterStudent}><SearchIcon/></button>
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
