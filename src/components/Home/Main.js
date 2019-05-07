import React from 'react';

const Main = props => {
    return (
        <main className="main__landing-page">
            <div className="main__landing">
                <div className="main__landing-info">
                    <h2 className="main__landing-title">Crea tu tarjeta de visita</h2>
                    <p className="main__landing-text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
                </div>
                <div className="main__landing-menu">
                    <ul className="main__landing-list">
                        <li className="main__landing-item"><i className="far fa-object-ungroup"></i>Diseña</li>
                        <li className="main__landing-item"><i className="far fa-keyboard"></i>Rellena</li>
                        <li className="main__landing-item"><i className="fas fa-share-alt"></i>Comparte</li>
                    </ul>
                </div>
                <div className="main__landing-start"> <a href="createCard.html" className="main__landing-link">comenzar</a></div>
            </div>
        </main>
    )
}

export default Main;