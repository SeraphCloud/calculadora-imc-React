import {useState} from "react";
import './App.css'

const tabelaIMC = [
    {faixa: 'Abaixo de 18.5', classificacao: 'Abaixo do peso'},
    {faixa: 'Entre 18.5 e 24.9', classificacao: 'Peso normal'},
    {faixa: 'Entre 25 e 29.9', classificacao: 'Sobrepeso'},
    {faixa: 'Acima de 30', classificacao: 'Obesidade'},
];

function App() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

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

        if (resultado < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            setClassificacao('Peso normal')
        } else if (resultado >= 25 && resultado <= 29.9) {
            setClassificacao('Acima do peso')
        } else {
            setClassificacao('Obesidade')
        }
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
            <div className="tabela-imc">
                {tabelaIMC.map(({faixa, classificacao: itemClassificacao}) => (
                    <div key={itemClassificacao} className={classificacao === itemClassificacao ? 'destacado' : ''}>
                        <p>{faixa}: {itemClassificacao}</p>
                    </div>
                ))}
            </div>
        </>
    )
}


export default App
