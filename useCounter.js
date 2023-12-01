import React, { useState } from 'react'

export const useCounter = (initialValue = 10) => {

    const [counter, setcounter] = useState(initialValue) ;

    const incrementar = (valor = 1) =>{
      // Se cambia y se toma el valor del current, porque en las pruebas no se puede hacer doble.
        setcounter((current) => current+valor);
    }

    const decrementar = (valor = 1) => {
        if (counter<=0) return;
        setcounter((current) => current-valor);
    }

    const reset = () => {
        setcounter(initialValue);
    }    

  return {
    counter,
    incrementar,
    decrementar,
    reset

  }
}
