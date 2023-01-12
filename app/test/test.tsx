import { useEffect, useState } from "react"

export default function Test({data}: any) {

    
    const [current, setCurrent] = useState(0);

    

    return (
        <div className="flex flex-col w-full">

        <div className="flex overflow-hidden">
            {
                data.preguntas &&
                data.preguntas.map((pregunta: any, idx: number) => (
                    <>
                        <div key={pregunta.id} style={{transform: `translateX(calc(${-100 * current}% - 1em)`, paddingLeft: "1em"}} className={`min-w-full duration-1000 transition-all ease-out ${idx !== current ? 'opacity-0' : 'opacity-100'}`}>
                            <h1 className="text-4xl">#{idx + 1}</h1>
                            <p className="text-justify">{pregunta.enunciado}</p>

                            <div className="flex gap-5 flex-col mt-3">
                            {
                               pregunta.respuestas.map((respuesta: any) => (
                                    <div className="w-full text-center bg-neutral-400 py-4 rounded-xl" key={respuesta.id}>
                                        {respuesta.contenido}
                                    </div>
                               ))
                            }
                            </div>
                           
                        </div>
                    </>
                ))
            }
            </div>

            <div className="flex justify-between w-full mt-4">
                <div className="bg-sky-700 flex flex-row align-baseline p-2 rounded-xl px-6">
                    <button onClick={() => setCurrent(current - 1)}>Next</button>
                </div>

                {
                    data.preguntas &&
                    <p>{current + 1}/{data.preguntas.length}</p>
                }

                <div className="bg-sky-700 flex flex-row align-baseline p-2 rounded-xl disabled:bg-gray-500 px-6">
                    <button onClick={() => setCurrent(current + 1)}>Next</button>
                </div>
            </div>
                        
        </div>
    )
}