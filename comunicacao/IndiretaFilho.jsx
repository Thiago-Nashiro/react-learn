import React from 'react'


export default props =>{
const min=50
const max = 30
 const geraIdade = () => parseInt(Math.random() * (max-min)) +min
 
 
 
    return(
        <div>
           <div>
                Filho
           </div>

           <button onClick={
               function(E){
                   props.quandoClicar('João', geraIdade, true)
               }
           }> Fornecer Informações</button>
        </div>

    )
}