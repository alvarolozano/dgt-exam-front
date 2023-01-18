import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className='flex flex-col gap-5'>
                <h1 className='justify-center text-5xl text- text-center'>Hola!</h1>
                <p className='text-justify'>Las webs de tests de conducir son realmente malas. Gracias a este proyecto, le damos un toque moderno a la experiencia de aprender a conducir</p>
                <p className='text-center'>Desarrollado por <a href='https://alvarolozano.dev' className='text-red-600'>alvarolozano.dev</a></p>
            </div>

<div className='w-full flex flex-col justify-center gap-5 self-center'>
        <Link className="text-center py-3 h-full bg-black text-white rounded-xl hover:border-black hover:w-full transition-all duration-600 hover:scale-110" href={'/test'}>
                <span>Empezar</span>
        </Link>

        <Link className="text-center h-full py-3 bg-red-500 text-white rounded-xl hover:border-black hover:w-full transition-all duration-600 hover:scale-110" href={'/repasar'}>
                <span>Repasar</span>
        </Link>
</div>
            
            
        </>
    )
}