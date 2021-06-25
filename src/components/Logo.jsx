import React from 'react';

const Logo = (props) => {
	console.log(props.type)
	console.log(props.type === `footer`)
  return (
		<a className={props.type === `footer` ? `logo logo--footer` : `logo`} href="#top">
			<span className="visually-hidden">Логотип Guitar-Shop</span>
		</a>
  )
}

export default Logo;
