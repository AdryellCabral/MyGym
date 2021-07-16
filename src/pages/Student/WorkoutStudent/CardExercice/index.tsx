import { Container } from "./styles";
import ModalExercice from "../ModalExercice";
import { useState } from "react";

interface CardProps {
  exercice: {
    id: number;
    name: string;
    group: string;
    description: string;
    gif:string;
    image: string;
    video: string;
  };
}
const CardExercice = ({ exercice }: CardProps) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(exercice)
  const handleModal = (modal: boolean) => {
    setOpenModal(!modal);
  };
  return (
    <Container img={exercice.image} onClick={() => handleModal(openModal)}>
      <div className="image"></div>
      <div className="info">
        <h1>{exercice.name}</h1>
        <p>{exercice.description}</p>
      </div>

      <ModalExercice
        openModal={openModal}
        exercice={exercice}
        handleModal={handleModal}
      />
    </Container>
  );
};

export default CardExercice;
