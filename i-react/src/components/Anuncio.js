import { checkPropTypes } from 'prop-types';
import React from 'react';

function Anuncio(props) {
  return (
    <div>
        <p> Inicio do anuncio </p>
            {props.children}
        <p> Fim do Anuncio </p>
    </div>
  )
}

export default Anuncio;