import { useCallback, useEffect, useState } from "react";
import Respuesta from "./respuesta";
import {saveAnswer, getAnswer} from "./database";
import Image from "next/image";


export default function Pregunta({pregunta, current, idx, testId}: any) {

    const [disabled, setDisabled] = useState(true);
    const [selected, setSelected] = useState(-1);

    const setAnswer = useCallback((answer: any) => {
        setDisabled(true);
        saveAnswer(testId, idx, answer);
    }, []);
    
    useEffect(() => {
        getAnswer(testId, idx).then(ans => {
            if(ans !== undefined) {
                console.log(`found question`)
                setSelected(ans);
            }
            else setDisabled(false);
        });
    }, [])
    
    return (
    <div key={pregunta.id} style={{transform: `translateX(calc(${-100 * current}% - 1em)`, paddingLeft: "2em"}} className={`min-w-full duration-150- transition-all ease-out flex flex-col justify-between ${idx !== current ? 'opacity-50' : 'opacity-100'}`}>
                    
    <div>
        {
        pregunta.imagen &&
            <div className="relative w-full h-max flex justify-center self-center">
                <Image src={pregunta.imagen} alt={`imagen pregunta ${idx + 1}`} height={0} width={300} className="rounded-xl border-neutral-700 p-1 border-2 border-opacity-90" loading="eager"/>   
            </div>
        }
        <h1 className="text-4xl">#{idx + 1}</h1>
        <p className="text-justify">{pregunta.enunciado}</p>
    </div>

    <div className="flex gap-5 flex-col mt-3 align-bottom">
        {
        pregunta.respuestas.map((respuesta: any, respuestaIndex: number) => (
                <Respuesta key={respuesta.id} selected={selected != -1 && selected == respuestaIndex} idx={respuestaIndex} enabled={!disabled} {...respuesta} onAnswer={(ans: any) => setAnswer(respuestaIndex)}/>
        ))
        }
    </div>
   
</div>
    )
}