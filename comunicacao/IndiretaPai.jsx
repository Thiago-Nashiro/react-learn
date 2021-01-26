import React, {useState} from 'react'
import IndiretaFilgo from './IndiretaFilho'


export default props =>{
const [nome, setNome] = useState('?')
const [idade, setIdade] = useState(0)
const [nerd, setNerd] = useState(false)


    function fornecerInformacoes(nome, idade,nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

    }
    return(
        <div>
            <span>{nome} </span>
            <span><strong>{idade}</strong> </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            
            <IndiretaFilgo quandoClicar={fornecerInformacoes}> </IndiretaFilgo>
        </div>
    )
}