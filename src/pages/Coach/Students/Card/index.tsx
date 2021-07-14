import { Container } from "./styles";
import { useState } from "react";

interface CardProps {
  student: {
    id: number;
    name: string;
    description: string;
    img: string;
  }
}
const Card = ({ student }: CardProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (modal: boolean) => {
    setOpenModal(!modal);
  };
  return (
    <Container img={student.img} onClick={() => handleModal(openModal)}>
      <div className="image"></div>
      <div className="info">
        <h1>{student.name}</h1>
        <p>Treinos</p>
        <p>Avaliação Física</p>
      </div>
    </Container>
  );
};

export default Card;
