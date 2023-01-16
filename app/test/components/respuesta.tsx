import { useCallback, useContext, useState } from "react"
import { ExamStateActions } from "../lib/types/reducer";
import { TestContext } from "../lib/examContext";

export default function Respuesta(respuesta: any) {

    const [ marcada, setMarcada ] = useState(false);

    const { dispatch } = useContext(TestContext);

    const marcarRespuesta = useCallback(() => {
        if(respuesta.enabled) {
            dispatch({
                action: respuesta.correcta ? ExamStateActions.saveAcierto : ExamStateActions.saveError,
                payload: respuesta
            });
                
            respuesta.onAnswer && respuesta.onAnswer.call && respuesta.onAnswer(respuesta.id);   
            setMarcada(true);
        }
    }, [respuesta]);

    return (
        <button disabled={!respuesta.enabled} onClick={() => marcarRespuesta()} className={`w-full text-center bg-neutral-400 py-4 rounded-xl ${(marcada || respuesta.selected) ? (respuesta.correcta ? 'bg-green-500' : 'bg-red-600') : ''}`} key={respuesta.id}>
            {respuesta.contenido}
        </button>
    )
}