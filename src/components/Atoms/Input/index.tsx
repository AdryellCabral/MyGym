import React, { ReactNode } from 'react';
import { OutlinedInput, FormControl, InputAdornment } from '@material-ui/core';
import clsx from 'clsx';
import { UseFormRegister } from 'react-hook-form';
import { useStyles } from './styles';


interface InputProps {
  children?: ReactNode;
  label: string;
  register?: UseFormRegister<Record<string, any>>;
  nameRegister: string;
}

function Input({children, label, register, nameRegister}: InputProps) {
  const classes = useStyles();
  
  return (
    <div>
     <FormControl className={clsx(classes.margin, classes.textField)} >
          <OutlinedInput
            name={nameRegister}
            placeholder={label}
            ref={register}
            startAdornment={<InputAdornment position="start">{children}</InputAdornment>}
          />
      </FormControl>
    </div>
  );
}

export default Input;