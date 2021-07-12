import { Container } from "./style";

interface OptionsType {
  name: string;
}

interface ListProps {
  options: Array<OptionsType>;
  src: string;
  funcText?: () => void;
  funcIcon?: () => void;
}

export default function ListaProvisória({
  options,
  src,
  funcText,
  funcIcon,
}: ListProps) {
  return (
    <Container>
      {options?.map((option, index) => (
        <div key={index}>
          <li onClick={funcText}>{option.name}</li>
          <img src={src} alt="" onClick={funcIcon} />
        </div>
      ))}
    </Container>
  );
}
