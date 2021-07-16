import React, { ReactNode } from "react";
import { OutlinedInput, FormControl, InputAdornment } from "@material-ui/core";
import clsx from "clsx";
import { StyledInput, useStyles } from "./styles";

interface InputProps {
  children: ReactNode;
  label: string;
  type?: string;
}

function Input({ children, label, type, ...rest }: InputProps) {
  // const classes = useStyles();

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
