import React from 'react'

const Padi = () => {
    return (

        <section>

            <div className="padi_grid">
                <div className="padi"><h2>PADI -  DYKKERCERITFIKAT</h2></div>
                <div className="padi_gray"></div>
            </div>

            <section className="dykkercertifikat_grid">

                <div className="dykkercertifikat_text">
                    <div>
                        <h4>TAG ET INTERNATIONALT ANERKENDT DYKKERCERITFIKAT</h4>
                        <br />
                        <p>Her finder du et stort udvalgaf dykkercurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercenter som uddaner fra PADI organistionen. Når du vægler at tag et dykkercertifikat hos os, får du ikke kun et internationalt annerkent dykkercertifikat til maredets beste priser, du får også et hvor kvaliteten er i top</p>
                        <br />
                        <p>Vi har kompetente insruktøer på vores dykkerkuser. Erfaring tillid  og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med er stort hold af kompetente insruktøer</p>
                    </div>
                </div>


                <div className="dykkercertifikat_img">
                    <img className="padi_logo" src="/imgs/padi_logo2.png" alt="padi logo" />
                </div>


            </section>

            <div className="flex-container">

                <p className="udstyr_text">SE ALLE KUSER OG CERIFIKATER HER!</p>
            </div>


        </section>

    );
}

export default Padi;