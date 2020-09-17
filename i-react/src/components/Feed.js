import React, { Component } from 'react';

import Post from './Post'
// COMPONENTE STATEFULL
class Feed extends Component {
  render () {
    return (
      <div>
        <Post id="post-1" post="Post 1" qtdComentarios={10} />
        <Post id="post-2" listaDeComentarios={["Comentario 1 do Post 2", "Comentario 2 do Post 2"]} post="Post 2" qtdComentarios={120}/>
        <Post id="post-3" listaDeComentarios={["Comentario 1 do Post 3", "Comentario 2 do Post 3"]} post="Post 3" qtdComentarios={140}/>
        <Post id="post-4" listaDeComentarios={["Comentario 1 do Post 4", "Comentario 2 do Post 4"]} post="Post 4" qtdComentarios={160}/>  
      </div>
    )
  }
}

export default Feed;