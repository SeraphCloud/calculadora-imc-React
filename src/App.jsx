import {useState} from "react";
import './App.css'

function App() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);

    const calcularImc = () => {
        if (!altura || !peso) {
            alert("Por favor, preencha os dados corretamente. ")
            return;
        }

        const alturaBr = altura.replace(',', '.')
        const pesoBr = peso.replace(',', '.')
        const alturaNum = parseFloat(alturaBr);
        const pesoNum = parseFloat(pesoBr);

        let alturaFinal = alturaNum;

        if (alturaFinal > 3) {
            alturaFinal = alturaFinal / 100;
        }

        const resultado = pesoNum / (alturaFinal * alturaFinal);

        setImc(resultado.toFixed(2));
    }

    return (
        <>

            <h1>Calculadora IMC</h1>
            <input type="text" placeholder={'Altura em metros (ex: 1.75):'} value={altura}
                   onChange={(e) => setAltura(e.target.value)}/>
            <input type="text" placeholder={'Peso em Kg(ex: 80.5):'} value={peso}
                   onChange={(e) => setPeso(e.target.value)}/>
            <button onClick={calcularImc}>Calcular</button>
            {imc && <p>{imc}</p>}
        </>
    )
}

export default App
