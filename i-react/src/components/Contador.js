import React, { useState } from 'react';    

function Contador() {

    const [contador, setContador] = useState(0)

    return (
        <div>
            <h1> Contador </h1>
            <span>{contador}</span>
            <div>
                <button onClick={() => setContador(contador - 1)}>Decrementar</button>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            </div>
        </div>
    );
}

export default Contador;