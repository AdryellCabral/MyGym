import React, { ReactNode } from 'react';
import { OutlinedInput, FormControl, InputAdornment } from '@material-ui/core';
import clsx from 'clsx';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { useStyles } from './styles';


interface InputProps {
  children?: ReactNode;
  label: string;
  register?: UseFormRegister<FieldValues>
}

function Input(props: InputProps) {
  const classes = useStyles();
  
  return (
    <div>
     <FormControl className={clsx(classes.margin, classes.textField)} >
          <OutlinedInput
            placeholder={props.label}
            ref={props.register}
            startAdornment={<InputAdornment position="start">{props.children}</InputAdornment>}
          />
      </FormControl>
    </div>
  );
}

export default Input;