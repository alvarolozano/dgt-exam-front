import { useState } from "react"

export default function Respuesta(respuesta: any) {

    const [marcada, setMarcada] = useState(false);

    return (
        <button onClick={() => setMarcada(true)} className={`w-full text-center bg-neutral-400 py-4 rounded-xl ${marcada ? (respuesta.correcta ? 'bg-green-500' : 'bg-red-600') : ''}`} key={respuesta.id}>
            {respuesta.contenido}
        </button>
    )
}