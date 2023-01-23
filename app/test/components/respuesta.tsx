import { useCallback, useContext, useState } from "react"
import { ExamStateActions } from "../../types/reducer";
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
        <button disabled={!respuesta.enabled} onClick={() => marcarRespuesta()} className={`relative w-full text-center py-4 px-2 rounded-md border-2 overflow-hidden ${(marcada || respuesta.selected) ? 'bg-transparent border-transparent' : ''}`} key={respuesta.id}>
            <span className={`absolute left-0 bottom-0 w-full h-full transition-all ease-linear duration-500  -z-20 rounded-md ${(marcada || respuesta.selected) && respuesta.correcta ? '' : '-translate-y-full'} bg-green-400`}/>
            <span className={`absolute left-0 bottom-0 w-full h-full transition-all ease-linear duration-500 -z-20 rounded-md ${(marcada || respuesta.selected) && !respuesta.correcta ? '' : '-translate-y-full'} bg-red-500`}/>
            {respuesta.contenido}
        </button>
    )
}