import { useState } from "react";
import Botom from "./Boton"
import "./Calculadora.css";

const Contador = () => {
    const [contador, setContador] = useState("");
    const [valorAnterior, setValorAnterior] = useState("");
    const [operador, setOperador] = useState("");
    function Aumentar() {
        setContador(contador + 1);
    }

    function imputNumber(num) {
        setContador(contador + num)
    }

     function Aumentar() {
        setContador(String(Number(contador || "0") + 1));
    }

    function seleccionarOperador(op) {
        setValorAnterior(contador);
        setOperador(op);
        setContador("");
    }

      function igual() {
        const anterior = Number(valorAnterior);
        const actual = Number(contador);
        let resultado = 0;

        if (operador === "+") {
            resultado = anterior + actual;
        } else if (operador === "-") {
            resultado = anterior - actual;
        } else if (operador === "*") {
            resultado = anterior * actual;
        } else if (operador === "/") {
            resultado = actual !== 0 ? anterior / actual : "Error";
        }

        setContador(String(resultado));
        setValorAnterior("");
        setOperador("");
    }

    function limpiar() {
        setContador("");
        setValorAnterior("");
        setOperador("");
    }

    return (
        <div>
            <label>{contador}</label>
            <br />
            <Botom onClick={() => imputNumber(1)}> 1 </Botom>
            <Botom onClick={() => imputNumber(2)}> 2 </Botom>
            <Botom onClick={() => imputNumber(3)}> 3 </Botom>
            <Botom onClick={() => imputNumber(4)}> 4 </Botom>
            <Botom onClick={() => imputNumber(5)}> 5 </Botom>
            <Botom onClick={() => imputNumber(6)}> 6 </Botom>
            <Botom onClick={() => imputNumber(7)}> 7 </Botom>
            <Botom onClick={() => imputNumber(8)}> 8 </Botom>
            <Botom onClick={() => imputNumber(9)}> 9 </Botom>
            <Botom onClick={() => imputNumber(0)}> 0 </Botom>
            <Botom onClick={() => seleccionarOperador("+")}> + </Botom>
            <Botom onClick={() => seleccionarOperador("-")}> - </Botom>
            <Botom onClick={() => seleccionarOperador("*")}> * </Botom>
            <Botom onClick={() => seleccionarOperador("/")}> / </Botom>
            <Botom onClick={igual}> = </Botom>
            <Botom onClick={limpiar}> C </Botom>
        </div>
    );
};

export default Contador;


