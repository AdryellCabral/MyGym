import { Container } from "./styles";
import ModalExercice from "../ModalExercice";
import { useState } from "react";
import { useWindowWidth } from "../../../../providers/WindowWidth";

interface CardProps {
  exercice: {
    id: number;
    name: string;
    group: string;
    description: string;
    image: string;
    video: string;
    gif: string;

  };
}
const Card = ({ exercice }: CardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (modal: boolean) => {
    setOpenModal(!modal);
  };
  const {windowWidth} = useWindowWidth()

  const setLengthStr = (str: string) => {
    let output = "";
    let length = windowWidth > 768 ? 190 : 140 
    if (str.length > length) {
      output = `${str.substring(0, length)}...`;
    } else {
      output = str;
    }
    return output;
  };

  
  return (
    <Container img={exercice.image} onClick={() => handleModal(openModal)}>
      <div className="image"></div>
      <div className="info">
        <h1>{exercice.name}</h1>
        <p>{setLengthStr(exercice.description)}</p>
      </div>

      <ModalExercice
        openModal={openModal}
        exercice={exercice}
        handleModal={handleModal}
      />
    </Container>
  );
};

export default Card;
