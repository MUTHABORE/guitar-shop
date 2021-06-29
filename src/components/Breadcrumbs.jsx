import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumbs = ({path}) => {
  console.log(path)
  return (
    <ol className="breadcrumbs">
      {path.map((point) => {
        if (point.link !== undefined) {
          return (
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={point.link}>{point.name}</Link>
            </li>
          )
        } else {
          return (
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href={`#top`}>{point.name}</a>
            </li>
          )
        }
      })}
    </ol>
  )
}

export default Breadcrumbs;
