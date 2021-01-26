import React from 'react';
import produtos from '../../data/produtos'


export default props =>{
 
    function getLinhas(){
        return produtos.map(produto => {
            return(
                <tr> 
                    <td> {produto.id} </td>
                    <td> {produto.nome} </td>
                    <td>R$ {produto.preco} </td>
                    
                </tr>
            )
                
            
        })
    }
     
    return(
     <div>
         <table>
             <thead> 
             <tr>
                 <th> ID</th>
                 <th> Nome</th>
                 <th> Preço</th>
             </tr>
             </thead>
             <tbody>
                {getLinhas()}
             </tbody>
          
                
         </table>
     </div>   
    );
};