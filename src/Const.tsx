
import React, { useState } from 'react';

function SepararParesImpares() {
  // Declarar dos variables de estado para pares e impares
  const [numerosPares, setNumerosPares] = useState([]);
  const [numerosImpares, setNumerosImpares] = useState([]);

  // Función para separar pares e impares y actualizar los estados
  // const separarNumeros = (numero) => {
  //   if (numero % 2 === 0) {
  //     setNumerosPares((prevPares) => [...prevPares, numero]);
  //   } else {
  //     setNumerosImpares((prevImpares) => [...prevImpares, numero]);
  //   }
  // };

  return (
    <div>
      <p>Números Pares: {numerosPares.join(', ')}</p>
      <p>Números Impares: {numerosImpares.join(', ')}</p>

      <button onClick={() => separarNumeros(2)}>Agregar 2</button>
      <button onClick={() => separarNumeros(3)}>Agregar 3</button>
      {/* Puedes agregar más botones para probar con otros números */}
    </div>
  );
}

export default SepararParesImpares;


