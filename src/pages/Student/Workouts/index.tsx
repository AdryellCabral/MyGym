import { Container } from "./styles";
import SelectFilter from "../../../components/SelectFilter";
import CardList from "./CardList";
import Card from "./Card";
import { useStudent } from "../../../providers/Student";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Exercice {
  description: string,
  gif: string,
  group: string
  id: number,
  image: string,
  name: string,
  seriesDuration: string,
  video: string,
}

interface WorkoutProps {
  exercice: Array<Exercice>,
  group: string,
  id: number,
  studentId: number,
}


const Workouts = () => {
  const [workoutsFiltred, setWorkoutsFiltred] = useState<Array<WorkoutProps>>([] as WorkoutProps[]);

  const filterGroup = (group: string) => {

    if (group === "") {
      setWorkoutsFiltred(student.workouts);
    } else {
      const newList = student.workouts.filter(
        (workout: WorkoutProps) => workout.group === group
      );
      setWorkoutsFiltred(newList);
    }
  };

  const { student } = useStudent();

  useEffect(() => {
    setWorkoutsFiltred(student?.workouts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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
              {workoutsFiltred ? (
                workoutsFiltred?.map((treino) => (
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
    </motion.div>
  );
};

export default Workouts;
