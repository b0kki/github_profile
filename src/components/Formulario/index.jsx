import { useState, useEffect } from "react"

const Formulario = () => {
    //retorna o valor e uma função para altera-lo
    const [materiaA, setmateriaA] = useState(0);
    const [materiaB, setmateriaB] = useState(0);
    const [materiaC, setmateriaC] = useState(0);
    const [nome, setNome] = useState('');


    useEffect(() => {
        console.log("o estado nome mudou");
        //executa apenas quando o campo [nome] for alterado
    }, [nome]);

    useEffect(() => {
        console.log("o estado materiaA mudou para" + materiaA);
        //executa apenas quando os campos especificados forem alterado
    }, [materiaA, materiaB]);

    useEffect(() => {
        console.log("o estado iniciou");

        return () => {
            console.log("o componente finalizou")
        }

        //[] array vazio => executa quando o componente inicia
    }, []);




    //retorna o valor novo
    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        //setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            //estadoAnterior = valornovo

            return evento.target.value;
        })
    }



    const renderizaResult = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>você foi aprovado</p>
            )
        } else {
            return (
                <p>você foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {/* exibindo arrays em elementos */}
                {[1, 2, 3, 4, 5].map(item => (
                    // necessario incluir uma key única para diferenciar caso hajam outros elementos
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="seu nome" onChange={alteraNome} />
            <input type="number" placeholder="nota materia A" onChange={({ target }) => setmateriaA(parseInt(target.value))} />
            <input type="number" placeholder="nota materia B" onChange={evento => setmateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota materia C" onChange={evento => setmateriaC(parseInt(evento.target.value))} />
            {renderizaResult()}
        </form>

    )
}

export default Formulario