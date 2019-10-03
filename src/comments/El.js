import React  from 'react'

const El = (props) => {
    return ( 

        <div className="container_dyker" key={props.elProps.id}>
            <img className="img_dyker" src={"/imgs/" + props.elProps.udstyrfoto} alt="pick" />
            <p className="dyker_text"> {props.elProps.produkt} </p>
            <p className="dyker_small">{props.elProps.pris}</p>
        </div>

     );
}
 
export default El;