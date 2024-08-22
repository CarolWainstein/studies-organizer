import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import ITarefa from "../../types/ITarefas";
import { useEffect, useState } from "react";
import tempoParaSegundos from "../../common/time";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

function Cronometro({selecionado, finalizarTarefa} : Props) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => { // nesse caso vai fazer com que o ciclo de vida do tempo/setTempo, se repeita e reinicie junto com o cronometro
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))            
        }
    },[selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000) // esse segunda parametro de setTimeout (o 1000) é em milisegundos, como queremos regredir 1 segundo, entao é 1000 milisegundos
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>                
            </div>
            
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}

export default Cronometro;