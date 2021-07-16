import { Container } from "./styles";

interface OptionsType {
  coaches?: { name: string };
  students?: { name: string };
  category?: string;
}

interface ListProps {
  options: Array<OptionsType>;
  src: string;
  funcText?: () => void;
  funcIcon?: () => void;
}

// se fez necessario ter duas funções, algumas telas se clicar no nome abre o modal e se clicar no icone faz outra coisa

export const List = ({ options, src, funcText, funcIcon }: ListProps) => {
  return (
    <Container>
      {options?.map((option, index) => (
        <div key={index}>
          <li onClick={funcText}>
            {option.coaches?.name}
            {option.students?.name}
            {option?.category}
          </li>
          <img src={src} alt="" onClick={funcIcon} />
        </div>
      ))}
    </Container>
  );
};
