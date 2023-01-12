import { useCallback, useEffect, useState } from "react"
import Respuesta from "./respuesta";

export default function Test({data, onComplete}: any) {

    
    const [current, setCurrent] = useState(0);

    const onCompleteCall = useCallback(() => {
        onComplete && onComplete.call && onComplete();
        setCurrent(0);
    }, [])

    

    return (
        <div className="flex flex-col w-full">

        <div className="flex overflow-hidden">
            {
                data &&
                data.preguntas &&
                data.preguntas.map((pregunta: any, idx: number) => (
                    <>
                        <div key={pregunta.id} style={{transform: `translateX(calc(${-100 * current}% - 1em)`, paddingLeft: "2em"}} className={`min-w-full duration-150- transition-all ease-out flex flex-col justify-between ${idx !== current ? 'opacity-50' : 'opacity-100'}`}>
                            
                            <div>
                                <h1 className="text-4xl">#{idx + 1}</h1>
                                <p className="text-justify">{pregunta.enunciado}</p>
                            </div>

                            <div className="flex gap-5 flex-col mt-3 align-bottom">
                                {
                                pregunta.respuestas.map((respuesta: any) => (
                                        <Respuesta key={respuesta.id} {...respuesta}/>
                                ))
                                }
                            </div>
                           
                        </div>
                    </>
                ))
            }
            </div>

            {
                    data &&
                    data.preguntas &&

            <div className="flex justify-between items-center w-full mt-4">
                    <button disabled={current <= 0} className="bg-sky-700 flex flex-row align-baseline p-2 rounded-xl px-6 disabled:opacity-50" onClick={() => setCurrent(current - 1)}>Anterior</button>

                
                    <p>{current + 1}/{data.preguntas.length}</p>

                
                    <button disabled={current >= data.preguntas.length - 1} className="bg-sky-700 flex flex-row align-baseline p-2 rounded-xl disabled:bg-gray-500 px-6 disabled:opacity-50" onClick={() => setCurrent(current + 1)}>Siguente</button>
            </div>
                }
                  {
                    data &&
                    data.preguntas && current == data.preguntas.length -1 &&
                    <button onClick={() => onCompleteCall()} className="w-full bg-black text-white mt-2 py-2 rounded-xl">finalizar</button>
                  }      
        </div>
    )
}


