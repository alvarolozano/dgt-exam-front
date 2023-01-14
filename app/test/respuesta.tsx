import { useCallback, useState } from "react"

export default function Respuesta(respuesta: any) {

    const [marcada, setMarcada] = useState(false);

    const marcarRespuesta = useCallback(() => {
        if(respuesta.enabled) {
            setMarcada(true);
            respuesta.onAnswer && respuesta.onAnswer.call && respuesta.onAnswer(respuesta.id);
        }
    }, [respuesta]);

    return (
        <button disabled={!respuesta.enabled} onClick={() => marcarRespuesta()} className={`w-full text-center bg-neutral-400 py-4 rounded-xl ${(marcada || respuesta.selected) ? (respuesta.correcta ? 'bg-green-500' : 'bg-red-600') : ''}`} key={respuesta.id}>
            {respuesta.contenido}
        </button>
    )
}