import { Container } from "./styles";
import CardList from "./CardList";
import Card from "./Card";
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { apiMyGym } from "../../../services/api";
import { useCoach } from "../../../providers/Coach";
import RegisterPhisicalAssessment from "../../../components/RegisterPhisicalAssessment";
import RegisterWorkout from "../../../components/RegisterWorkout";
import { useUserProvider } from "../../../providers/User";

interface  Aluno {
  id: number;
  name: string;
  description: string;
  img: string;
}

interface Alunos{
  students: Aluno[];
}

const Students = () => {
  const {
    userProvider: { idUser, token },
  } = useUserProvider();

  const [filter, setFilter] = useState("");
  const { coachAuthInfo } = useCoach();
  const [students, setStudents] = useState<Alunos[]>([]);
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
      .get(`coaches?userId=${idUser}&_embed=students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => setStudents(response.data[0].students));
  };

  useEffect(() => {
    GetStudents();
  }, []);

  // const filterStudent = () => {
  //   apiMyGym
  //     .get(`students?name=${filter}&coachId=${coachAuthInfo.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${coachAuthInfo.token}`,
  //       },
  //     })
  //     .then((response) => setStudents(response));
  // };
  return (
    <section
      className="page--students"
      style={{ width: "100%", marginTop: "90px" }}
    >
      <Container>
        <div className="container--top">
          <h1>Alunos</h1>
          <div className="container--filter">
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button /* onClick={filterStudent} */>
              <SearchIcon style={{ color: "var(--color-green)" }} />
            </button>
          </div>
        </div>

        <CardList>
          <>
            {students?.map((item: any) => (
              <Card key={item.id} student={item} />
            ))}
          </>
        </CardList>
      </Container>
    </section>
  );
};

export default Students;
