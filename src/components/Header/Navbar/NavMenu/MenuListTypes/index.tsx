import React from 'react';
import { useHistory } from "react-router-dom";


export const Gym = ()=>{
    const history = useHistory();

    const handlePath = (path: string)=>{
        history.push(path);
    };


    return(
        <>
            <li onClick={() => handlePath("/")}>
                Home
            </li>
            <li onClick={() => handlePath("/register_student")}>
                Cadastrar aluno
            </li>
            <li onClick={() => handlePath("/register_coach")}>
                Cadastrar coach
            </li>
            <li onClick={() => handlePath("/settings")}>
                Configurações
            </li>
        </>
    );
}

export const Coach = ()=>{
    const history = useHistory();

    const handlePath = (path: string)=>{
        history.push(path);
    };

    return(
        <>
            <li onClick={() => handlePath("/")}>
                Alunos
            </li>
            <li onClick={() => handlePath("/settings")}>
                Configurações
            </li>  
        </>
    );
}

export const Student = ()=>{
    const history = useHistory();

    const handlePath = (path: string)=>{
        history.push(path);
    };

    return(
        <>
            <li onClick={() => handlePath("/")}>
                Home
            </li>
            <li onClick={() => handlePath("/exercises")}>
                Exercícios
            </li>
            <li onClick={() => handlePath("/workouts")}>
                Treinos
            </li>
            <li onClick={() => handlePath("/assessment")}>
                Avaliação física
            </li>
            <li onClick={() => handlePath("/feeding")}>
                Alimentação
            </li>
            <li onClick={() => handlePath("/settings")}>
                Configurações
            </li>  
        </>
    );
}