import "./Card.css";
import React from "react";



export default (props) => {
    const cardStyle ={
     backgroundColor: props.color || '#f00',
     borderColor: props.color || '#f00',}
   

    return (
        <div class="Card" style={cardStyle}>
            <div class="Title">{props.titulo} </div>
                <div class="Contend">
                  {props.children}  
                </div>
            
        </div>
    );
};