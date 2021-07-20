import { Container } from "./styles";
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

  const defaultImg =  "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg"
  const imgPerfil = student?.img === undefined ?  defaultImg : student?.img
  console.log(student)
  return (
    <Container img={imgPerfil} onClick={() => history.push(`/students/${student.id}`)}>
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
