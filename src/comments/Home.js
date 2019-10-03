import React from 'react'
import Udstyr from './Udstyr';
import Dyk from './Dyk';
import Padi from './Padi'

const Home = () => {
    return (
        <div>
            <section className="home_pick">

                <div className="white">
                    <h1>the best way to observe a fish is to become a fish</h1>
                    <h5>jacques cousteau</h5>
                </div>


            </section>

            <Udstyr />
            <Dyk />
            <Padi />




        </div>


    );
}

export default Home;