import React, { ReactNode } from "react";
import { OutlinedInput, FormControl, InputAdornment } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./styles";

interface InputProps {
  children: ReactNode;
  label: string;
}

function Input({ children, label,...rest }: InputProps) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <OutlinedInput
          placeholder={label}
          {...rest}
          startAdornment={
            <InputAdornment position="start">{children}</InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

export default Input;
