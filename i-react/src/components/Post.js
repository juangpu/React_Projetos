import React from 'react';
import PropTypes from 'prop-types';

import './Post.css'

function Post(props) {

  return (
    <div className="post">
        <p> {props.post} </p>
        <p> Cometários ({props.qtdComentarios}) </p>

        <ul>
            {props.listaDeComentarios != null ?
                props.listaDeComentarios.map((comentario, index) => <li key={comentario + index}> {comentario} </li>)
              :
                ""
            }
        </ul>
    </div>
  );
}

Post.defaultProps = {
  qtdComentarios: 0,
  listaDeComentarios: null
}

Post.propTypes = {
  qtdComentarios: PropTypes.number,
  post: PropTypes.string
}

export default Post;