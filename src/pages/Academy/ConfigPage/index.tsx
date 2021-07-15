import NewPassword from "../../../components/NewPassword";
import {
  AlterarPlano,
  GreenButtonStyled2,
  PageContainer,
  RedButtonStyled,
} from "./styles";

export default function AcademyConfig() {
  return (
    <PageContainer>
      <div className="spans">
        <span>Configurações</span>
        <span>Plano: plano do provider</span>
      </div>
      <div className="components">
        <NewPassword />
        <AlterarPlano>
          <span>Alterar plano</span>
          <select name="Planos" defaultValue="Anual">
            <option value="Anual">Anual</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Semestral">Semestral</option>
          </select>
          <GreenButtonStyled2>Confirmar</GreenButtonStyled2>
        </AlterarPlano>
      </div>
      <RedButtonStyled>Logout</RedButtonStyled>
    </PageContainer>
  );
}
