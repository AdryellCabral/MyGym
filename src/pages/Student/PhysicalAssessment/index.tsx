import { Container } from "./styles";
import FigAf from "../../../assets/images/FigAf.svg";
import { useStudent } from "../../../providers/Student";
const PhysicalAssessment = () => {

  const {student} = useStudent()
 
  
  return (
    <section className="physicalAssessment" style={{ maxWidth: "2000px" }}>
      <Container img={FigAf}>
        <h1>Avaliação Física</h1>
        <div className="container--af">
          <ul className="data">
            <li key="1">
              Peso: <span>{student?.physicalAssessment?.weight[student?.physicalAssessment?.weight?.length - 1]}</span>
            </li>
            <li key="2">
              Altura: <span>{student?.physicalAssessment?.height}</span>
            </li>
            <li key="3">
              IMC: <span>{student?.physicalAssessment?.imc[student?.physicalAssessment?.imc?.length - 1]}</span>
            </li>
            <li key="4">
              Percentual de gordura: <span>{student?.physicalAssessment?.taxFat[student?.physicalAssessment?.taxFat?.length - 1]}</span>
            </li>
            <li key="5">
              Massa Magra: <span>{student?.physicalAssessment?.leanMass[student?.physicalAssessment?.leanMass?.length - 1]}</span>
            </li>
            <li key="6">
              Taxa metabólica basal: <span>{student?.physicalAssessment?.metabolicRate}</span>
            </li>
          </ul>

          <div className="figure" />
        </div>
      </Container>
    </section>
  );
};

export default PhysicalAssessment;
