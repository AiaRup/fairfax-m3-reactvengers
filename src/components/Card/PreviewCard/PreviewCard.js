import React from 'react';
import IconLink from './IconLink';

const ARRICON = [
    {
        liClass: 'sm__email',
        linkClass: 'email__link',
        iconClass: 'far fa-envelope',
        hrefDefault: 'mailto:'
    },
    {
        liClass: 'sm__phone',
        linkClass: 'mobile__link',
        iconClass: 'fas fa-mobile-alt',
        hrefDefault: 'tel:'
        },
    {
        liClass: 'sm__linkedin',
        linkClass: 'linkedin__link',
        iconClass: 'fab fa-linkedin-in',
        hrefDefault: 'https://www.linkedin.com/in/'
        },
    {
        liClass: 'sm__github',
        linkClass: 'github__link',
        iconClass: 'fab fa-github-alt',
        hrefDefault: 'https://github.com/'
        }
];

const PreviewCard = props => {
  const {user: {name, job, email, phone, linkedin, github, photo, palette}, iconsStateArr} = props;
  //cambiamos el string vacio del objeto para que lo sustituya por nombre y apellido cada vez que borremos el campo
  // const newName = name ? name: 'nombre apellido'
  // const newJob = job ? job: 'Front-end developer'
  const iconsData = [ email, phone, linkedin, github ]
  // const defaultPalette = palette ? palette: 1;

    return (
        <section className="main__preview">
            <div className={`preview__card theme${palette || 1}`}>
                <button className="preview__button">
                  <i className="far fa-trash-alt trash-icon"></i>
                    reset
                </button>
                <div className="card__header ">
                  <h2 className="card__name ">{name || 'nombre apellido'}</h2>
                  <p className="card__job">{job || 'Front-end developer'}</p>
                </div>
                <div className="card__image js__profile-image" style={{backgroundImage: `url(${photo})`}}><img className="img__user" src={photo} alt="User-profile-pic" />
                </div>
                <ul className="card__links-list">
                    {ARRICON.map((icon, index) =>
                        <IconLink
                        liClass={icon.liClass}
                        linkClass={icon.linkClass}
                        iconClass={icon.iconClass}
                        key={index}
                        iconsData={iconsData[index]}
                        hrefDefault={icon.hrefDefault}
                        isVisible={iconsStateArr[index].isVisible}
                        />
                    )}
                </ul>
            </div>
        </section>
    )
}

export default PreviewCard;

