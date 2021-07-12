import { UseFormRegister } from "react-hook-form";
import { Input } from "./style";

interface InputAFProps {
  label: string;
  register: UseFormRegister<Record<string, any>>;
  nameRegister: string;
}

export default function InputAF({
  label,
  register,
  nameRegister,
}: InputAFProps) {
  return <Input {...register(nameRegister)} placeholder={label} />;
}
