import { useState } from "react";
import { Container } from "./styles";
import FigAf from "../../assets/images/FigAf.svg";
const PhysicalAssessment = () => {
  const [af] = useState({
    size: 80,
    height: 70,
    imc: 10,
    fatPercentage: 10,
    leanMass: 10,
    basalMetabolicRate: 10,
  });
  return (
    <section className="physicalAssessment" style={{ maxWidth: "2000px" }}>
      <Container img={FigAf}>
        <h1>Avaliação Física</h1>
        <div className="container--af">
          <ul className="data">
            <li key="1">
              Peso: <span>{af.size}</span>
            </li>
            <li key="2">
              Altura: <span>{af.height}</span>
            </li>
            <li key="3">
              IMC: <span>{af.imc}</span>
            </li>
            <li key="4">
              Percentual de gordura: <span>{af.fatPercentage}</span>
            </li>
            <li key="5">
              Massa Magra: <span>{af.leanMass}</span>
            </li>
            <li key="6">
              Taxa metabólica basal: <span>{af.basalMetabolicRate}</span>
            </li>
          </ul>

          <div className="figure" />
        </div>
      </Container>
    </section>
  );
};

export default PhysicalAssessment;
