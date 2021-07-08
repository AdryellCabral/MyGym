import { Input } from "./style";

export default function InputAF(props: any) {
  const { label } = props;
  return <Input name={label} placeholder={label} />;
}
