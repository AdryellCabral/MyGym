import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import NewPassword from "../../../components/NewPassword";
import {
  AlterarPlano,
  GreenButtonStyled2,
  PageContainer,
  RedButtonStyled,
} from "./styles";

export default function AcademyConfig() {
  const history = useHistory();

  const hanldeLogout = () => {
    history.push("/");
    localStorage.clear();
    window.location.reload();
  };

  const onSubmit = () => {
    toast.success("Plano alterado com sucesso!");
    history.push("/");
  };

  return (
    <PageContainer>
      <div className="spans">
        <span>Configurações</span>
        <span>Plano: plano do provider</span>
      </div>
      <div className="components">
        <NewPassword />
        <AlterarPlano onSubmit={onSubmit}>
          <span>Alterar plano</span>
          <select name="Planos" defaultValue="Anual">
            <option value="Anual">Anual</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Semestral">Semestral</option>
          </select>
          <GreenButtonStyled2 type="submit">Confirmar</GreenButtonStyled2>
        </AlterarPlano>
      </div>
      <RedButtonStyled onClick={hanldeLogout}>Logout</RedButtonStyled>
    </PageContainer>
  );
}
