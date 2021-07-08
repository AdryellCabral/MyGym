import { Input } from "./style";

export default function InputAF(props: any) {
  const { label, name } = props;
  return <Input name={name} placeholder={label} />;
}
