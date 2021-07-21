import React, { ReactNode } from "react";
import {  FormControl, InputAdornment } from "@material-ui/core";
import { StyledInput } from "./styles";

interface InputProps {
  children: ReactNode;
  label: string;
  type?: string;
}

function Input({ children, label, type, ...rest }: InputProps) {

  return (
    <div>
      <FormControl>
        <StyledInput
          placeholder={label}
          type={type}
          startAdornment={
            <InputAdornment position="start">{children}</InputAdornment>
          }
          {...rest}
        />
      </FormControl>
    </div>
  );
}

export default Input;
