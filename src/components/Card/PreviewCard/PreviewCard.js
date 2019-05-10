import React from 'react';
import IconLink from './IconLink';

const ARRICON = [
    {
        liClass: 'sm__email',
        linkClass: 'email__link',
        iconClass: 'far fa-envelope'
    },
    {
        liClass: 'sm__phone',
        linkClass: 'mobile__link',
        iconClass: 'fas fa-mobile-alt'
        },
    {
        liClass: 'sm__linkedin',
        linkClass: 'linkedin__link',
        iconClass: 'fab fa-linkedin-in'
        },
    {
        liClass: 'sm__github',
        linkClass: 'github__link',
        iconClass: 'fab fa-github-alt'
        }
];

const PreviewCard = props => {
    return (
        <section className="main__preview">
            <div className="preview__card theme1">
                <button className="preview__button">
                    <i className="far fa-trash-alt trash-icon"></i>
                    reset
                </button>
                <div className="card__header ">
                    <h2 className="card__name ">nombre apellido</h2>
                    <p className="card__job">Front-end developer</p>
                </div>
                <div className="card__image js__profile-image"><img className="img__user" src="" alt="" />
                </div>
                <ul className="card__links-list">
                    {ARRICON.map((icon, index) =>
                        <IconLink liClass={icon.liClass} linkClass={icon.linkClass} iconClass={icon.iconClass} key={index}/>
                    )}
                    
                </ul>
            </div>
        </section>

    )
}

export default PreviewCard;