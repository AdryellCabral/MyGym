<<<<<<< HEAD
import React, { ReactNode } from "react";
import { OutlinedInput, FormControl, InputAdornment } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./styles";
=======
import React, { ReactNode } from 'react';
import { OutlinedInput, FormControl, InputAdornment } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';

>>>>>>> 5ab03d8ef9c425ce38e4baadbe1ffa49fcc66e65

interface InputProps {
  children: ReactNode;
  label: string;
}

<<<<<<< HEAD
function Input({ children, label,...rest }: InputProps) {
=======
function Input({children, label, ...rest}: InputProps) {
>>>>>>> 5ab03d8ef9c425ce38e4baadbe1ffa49fcc66e65
  const classes = useStyles();

  return (
    <div>
<<<<<<< HEAD
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <OutlinedInput
          placeholder={label}
          {...rest}
          startAdornment={
            <InputAdornment position="start">{children}</InputAdornment>
          }
        />
=======
     <FormControl className={clsx(classes.margin, classes.textField)} >
          <OutlinedInput
            placeholder={label}
            {...rest}
            startAdornment={<InputAdornment position="start">{children}</InputAdornment>}
          />
>>>>>>> 5ab03d8ef9c425ce38e4baadbe1ffa49fcc66e65
      </FormControl>
    </div>
  );
}

export default Input;
