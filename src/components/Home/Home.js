/* Creamos la base de los componentes del landing page */
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Home = props => {
    return (
    <div className="page">
        <div className="page__container">
            <div className="page__subcontainer">
                <Header />
                <Main />
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Home;