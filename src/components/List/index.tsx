import { Container } from "./styles";

interface OptionsType {
  coaches?: { name: string };
  students?: { name: string };
  category?: string;
}

interface ListProps {
  options: Array<OptionsType>;
  src: string;
  func?: () => void;
  func2?: () => void;
}

// se fez necessario ter duas funções, algumas telas se clicar no nome abre o modal e se clicar no icone faz outra coisa

export const List = ({ options, src, func, func2 }: ListProps) => {
  return (
    <Container>
      {options?.map((option, index) => (
        <div key={index}>
          <li  onClick={func2}>
            {option.coaches?.name}
            {option.students?.name}
            {option?.category}
          </li>
          <img src={src} alt="" onClick={func} />
        </div>
      ))}
    </Container>
  );
};
