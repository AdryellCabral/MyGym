import { Container } from "./styles";
import CardList from "./CardList";
import Card from "./Card";
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { apiMyGym } from "../../../services/api";

import { useUserProvider } from "../../../providers/User";
import { motion } from "framer-motion";

interface Aluno {
  id: number;
  name: string;
  description: string;
  img: string;
}

interface Alunos {
  students: Aluno[];
}

const Students = () => {
  const {
    userProvider: { idUser, token },
  } = useUserProvider();

  const [filter, setFilter] = useState("");
  const [students, setStudents] = useState<Alunos[]>([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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
    </motion.div>
  );
};

export default Students;
