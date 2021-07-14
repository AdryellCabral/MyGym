import { Container } from "./styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

interface CardProps {
  student: {
    id: number;
    name: string;
    description: string;
    img: string;
  }
}
const Card = ({ student }: CardProps) => {
  const history = useHistory();

  
  return (
    <Container img={student.img} onClick={() => history.push(`/students/${student.id}`)}>
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
