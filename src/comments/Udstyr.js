import React, { useState } from 'react'
import Elementer from './Elementer';

const Udstyr = () => {


    const [udstyr, ] = useState([

        { udstyrfoto: "reg.jpg", produkt: "rejefine", pris: "KR.899-", id: 1 },
        { udstyrfoto: "fine.jpg", produkt: "rejefine", pris: "KR.999-", id: 2 },
        { udstyrfoto: "fine.jpg", produkt: "rejefine", pris: "KR.999-", id: 3 },
        { udstyrfoto: "hanske.jpg", produkt: "rejefine", pris: "KR.1499-", id: 4 }


    ]);


    const udstyrliste = udstyr.map(e => {

        return (
            <Elementer elemenProps={e} />

            

        )

    })



    return (
        <section className="udstyr">

            <div className="udstyr_grid">
                <div className="populære"><h2>MEST POPULÆRER DYKKERUDSTYR</h2></div>
                <div className="populære_gray"></div>

            </div>

            <section className="flex_grid">
                <div className="flex-container">
                    {udstyrliste}
                    <p className="udstyr_text">SE MERE LÆKKERT UDSTYR HER!</p>
                </div>
            </section>

        </section>
    );
}

export default Udstyr;