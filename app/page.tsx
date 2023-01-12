import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className='flex flex-col gap-5'>
                <h1 className='justify-center text-5xl text- text-center'>Hola!</h1>
                <p className='text-justify'>Las webs de tests de conducir son realmente malas. Gracias a este proyecto, le damos un toque moderno a la experiencia de aprender a conducir</p>
                <p className='text-center'>Desarrollado por <a href='https://alvarolozano.dev' className='text-red-600'>alvarolozano.dev</a></p>
            </div>

            <Link className='w-full flex flex-col justify-center self-center py-3 bg-black text-white rounded-xl hover:border-black hover:w-full transition-all duration-600 hover:scale-110' href={'/test'}>
                <span className="text-center">Empezar</span>
            </Link>
        </>
    )
}