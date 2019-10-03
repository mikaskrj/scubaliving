import React from 'react'

const Elementer = (props) => {
    return ( 

        <div className="container" key={props.elemenProps.id}>
            <img className="img_flex" src={"/imgs/" + props.elemenProps.udstyrfoto} alt="produkt billed" />
            <p className="element_text"> {props.elemenProps.produkt} </p>
            <p>{props.elemenProps.pris}</p>
        </div>

     );
}
 
export default Elementer;