import React from 'react';
import alunos from '../../data/alunos';

export default props => {
    const lil = (
    <li> {alunos[0].id}){alunos[0].nome} -> {alunos[0].nota} 
    </li>
);
    const alunoLI = alunos.map((aluno) => {
        return (
            <li key = {aluno.id}>
                {aluno.id }) { aluno.nome } -> {aluno.nota}
            </li>
        );
    });

    return (
        <div>
            <ul style= {{ listStyle:"NONE"}}>
                {alunoLI}
                

            </ul>
        </div>
    );
}