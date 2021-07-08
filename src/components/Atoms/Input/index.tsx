import React, { ReactNode } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { OutlinedInput } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { FieldValues, UseFormRegister } from 'react-hook-form';


interface InputProps {
  children?: ReactNode;
  placeholder: string;
  register: UseFormRegister<FieldValues>
}



export function Input({children, placeholder, register}: InputProps) {
  const classes = useStyles();
  
  return (
    <div>
      
     <FormControl className={clsx(classes.margin, classes.textField)} >
          <OutlinedInput
            placeholder={placeholder}
            ref={register}
            startAdornment={<InputAdornment position="start">{children}</InputAdornment>}
          />
      </FormControl>
        
    </div>
  );
}
