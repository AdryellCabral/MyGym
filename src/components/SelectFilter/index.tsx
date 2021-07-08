import { SelectFilterStyled } from "./styles";

interface SelectProps {
  onChangeOption: (categoria: string) => void;
}

const SelectFilter = ({ onChangeOption }: SelectProps) => {
  return (
    <SelectFilterStyled
      name="categoria"
      onChange={(e) => onChangeOption(e.target.value)}
      defaultValue="Categoria"
      placeholder="Categoria"
    >
      <option value="">Categoria</option>
      <option value="Braços">Braços</option>
      <option value="Peito">Peito</option>
      <option value="Pernas">Pernas</option>
      <option value="Panturrilha">Panturrilha</option>
      <option value="Força">Força</option>
      <option value="Cárdio">Cárdio</option>
    </SelectFilterStyled>
  );
};

export default SelectFilter;
