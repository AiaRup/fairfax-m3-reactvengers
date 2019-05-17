import React from 'react';
import IconLink from './IconLink';
import { iconsArr } from '../../../data/appData.js';

const PreviewCard = props => {
  const {
    user: { name, job, email, phone, linkedin, github, photo, palette },
    iconsStateArr,
    resetInfo
  } = props;
  const iconsData = [email, phone, linkedin, github];

  return (
    <section className="main__preview">
      <div className={`preview__card theme${palette || 1}`}>
        <button className="preview__button" onClick={resetInfo}>
          <i className="far fa-trash-alt trash-icon" />
          reset
        </button>
        <div className="card__header ">
          <h2 className="card__name ">{name || 'nombre apellido'}</h2>
          <p className="card__job">{job || 'Front-end developer'}</p>
        </div>
        <div className="card__image js__profile-image" style={{ backgroundImage: `url(${photo})` }}>
          <img className="img__user" src={photo} alt="User-profile-pic" />
        </div>
        <ul className="card__links-list">
          {iconsArr.map((icon, index) => (
            <IconLink liClass={icon.liClass} linkClass={icon.linkClass} iconClass={icon.iconClass} key={index} iconsData={iconsData[index]} hrefDefault={icon.hrefDefault} isVisible={iconsStateArr[index].isVisible} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PreviewCard;
