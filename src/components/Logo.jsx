import React from 'react';

const Logo = (props) => {
  return (
		<a className={props.type === `footer` ? `logo logo--footer` : `logo`} href="#top">
			<span className="visually-hidden">Логотип Guitar-Shop</span>
		</a>
  )
}

export default Logo;
