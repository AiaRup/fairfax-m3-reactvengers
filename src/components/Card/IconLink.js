import React from 'react';

const IconLink = ({ liClass, linkClass, iconClass }) => {
    return (
        <li className={`card__link-sm ${liClass} hidden`}>
            <a className={`${linkClass} social__link`} href="">
                <i className={iconClass}></i>
            </a>
        </li>
    )
}

export default IconLink;