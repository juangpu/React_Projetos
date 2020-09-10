import React from 'react';

import '../App.css'

function Post() {

    let qtdComentarios = 101;
    let listaDeComentarios = ["Comentário 1", "Comentário 2"];

  return (
    <div className="post">
        <p> Sou um post </p>
        <p> Cometários ({qtdComentarios > 100 ? "99+" : qtdComentarios}) </p>

        <ul>
            {listaDeComentarios.map(comentario => <li> {comentario} </li> )}
        </ul>
    </div>
  );
}

export default Post;