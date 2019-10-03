import React, { useState } from 'react'
import El from './El';

const Dyk = () => {

    const [el, ] = useState([

        { udstyrfoto: "malta.jpg", produkt: "MALTA", pris: "Oplev skønne malta og et helt fantatiske dyreliv og  sammen. vi arrangerer", id: 1 },
        { udstyrfoto: "norge.JPG", produkt: "NORGE", pris: "Oplev skønne malta og et helt fantatiske dyreliv og sammen. vi arrangerer", id: 2 },



    ]);


    const elliste = el.map(e => {

        return (
            <El elProps={e} />



        )

    })


    return (
        <section>

            <div className="dyk_grid">
                <div className="dyk"><h2>DYK UD I VERDEN</h2></div>
                <div className="dyk_gray"></div>

            </div>

            <section className="dyker_grid">
                <div className="dyker-container">
                    {elliste}
                </div>


            </section>
            <br />
            <br/>
            <div className="flex-container">

                <p className="udstyr_text">SE FLERE DESTINATOINER OG MULIGHEDER HER!</p>
            </div>



        </section>
    );
}

export default Dyk;