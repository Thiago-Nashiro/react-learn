import React from "react";

export default function ComParametro(props) {
    console.log(props)
    const status = props.nota >= 6 ? "Aprovado" : "Recuperação";
    const notaInt = Math.ceil(props.nota);
    return(
        <div>
            <h2>{props.titulo}</h2>
            <p>
            <h3>{props.aluno} tem nota  { props.nota }</h3>
            e foi  <strong>{ status}
            </strong>
            
            </p>
            

        </div>
    );
}