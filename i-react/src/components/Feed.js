import React from 'react';

import Post from './Post'

function Feed() {
  return (
    <div>
      <Post  post="Post 1" qtdComentarios={10} />
      <Post listaDeComentarios={["Comentario 1 do Post 2", "Comentario 2 do Post 2"]} post="Post 2" qtdComentarios={120}/>
      <Post listaDeComentarios={["Comentario 1 do Post 3", "Comentario 2 do Post 3"]} post="Post 3" qtdComentarios={140}/>
      <Post listaDeComentarios={["Comentario 1 do Post 4", "Comentario 2 do Post 4"]} post="Post 4" qtdComentarios={160}/>  
    </div>
  )
}

export default Feed;