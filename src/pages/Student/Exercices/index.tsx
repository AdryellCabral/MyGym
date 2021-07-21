import { Container } from "./styles";
import SelectFilter from "../../../components/SelectFilter";
import CardList from "./CardList";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useExercises } from "../../../providers/Exercises";
import { motion } from "framer-motion";

interface Exercice {
  id: number;
  name: string;
  group: string;
  description: string;
  image: string;
  gif: string;

  video: string;
}

const Exercices = () => {
  const { exercises } = useExercises();
  const [filterList, setFilterList] = useState<Exercice[]>([] as Exercice[]);

  const filterGroup = (group: string) => {
    if (group === "") {
      setFilterList(exercises);
    } else {
      const newlist = exercises.filter(
        (exercice: Exercice) => exercice.group === group
      );
      setFilterList(newlist);
    }
  };

  useEffect(() => {
    setFilterList(exercises);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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
              {filterList?.map((item: Exercice) => (
                <Card key={item.id} exercice={item} />
              ))}
            </>
          </CardList>
        </Container>
      </section>
    </motion.div>
  );
};

export default Exercices;
