import { Container } from "./styles";
import PurpleButton from "../../../components/PurpleButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiMyGym } from "../../../services/api";

interface RoomParams {
  id: string,
}

interface Treino {
  treino: string,
  peso?: string,
}

interface Snack {
  snack: string,
  peso?: number,
}

interface Student {
  name: string,
  email: string,
  coachId: number,
  academyId: number,
  userId: number,
  id: number,
  workouts: Treino[],
  physicalAssessment?: {peso: number, imc: number,},
  snacks?: Snack[],
}


const InfoStudent = () => {
  const [info, setInfo] = useState<any>({});
  const params = useParams<RoomParams>();
  const Id = params.id;
  let token = localStorage.getItem("token") || "";
  if (token !== "") {
    token = JSON.parse(token);
  }

  const GetInfo = () => {
    apiMyGym
      .get(`students?userId=${Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => setInfo(response))
  }

  useEffect(() => {
    GetInfo();
  },[])

  return (
    <section className="home--Student" style={{ marginTop: "95px" }}>
      <Container percentage={(16 / 20) * 100}>
        <div className="container--top">
          <div className="container--user">
            <figure>
              <img
                src="http://s2.glbimg.com/c-WVrLcmkvQbU_7kolZlss_kZ3k=/e.glbimg.com/og/ed/f/original/2015/06/09/thinkstockphotos-478000165.jpg"
                alt="Usuário"
              />
              <figcaption>{info.name}</figcaption>
            </figure>

            <div className="trainingPerformed">
              <h2>Treinos Realizados</h2>
              <div className="percentageBar">
                <div>
                  <span>16/20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="workouts--chart">
          <h2>Treinos Cadastrados</h2>
          <div/>
          
          <PurpleButton small={false} onClick={() => console.log("clicou")}>Novo Treino</PurpleButton>
        </div>
        <div className="progression--chart">
          <h2>Progressão</h2>
          <div />
          <PurpleButton small={false} onClick={() => console.log("clicou")}>Nova Avaliação</PurpleButton>
        </div>
      </Container>
    </section>
  );
};

export default InfoStudent;
