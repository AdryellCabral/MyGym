import { Container } from "./styles";
import SelectFilter from "../../../components/SelectFilter";
import CardList from "./CardList";
import Card from "./Card";
import { useStudent } from "../../../providers/Student";

const Workouts = () => {
  const filterGroup = (group: string) => {
    console.log(group);
  };

  const { student } = useStudent();
  
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
            {student && student.workouts[0] ? (
              student?.workouts?.map((treino: any) => (
                <Card key={treino.id} workout={treino} />
              ))
            ) : (
              <div style={{ marginTop: "100px" }}>
                Nenhum treino cadastrado, fale com seu coach!
              </div>
            )}
          </>
        </CardList>
      </Container>
    </section>
  );
};

export default Workouts;
