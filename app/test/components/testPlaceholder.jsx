export default function TestPlaceholder() {

    return (

        <div>

        <div className="min-w-full duration-150- transition-all ease-out flex flex-col justify-between">
            <div className="relative w-full h-max flex justify-center self-center">
                <div className="border-neutral-700 p-1 border-2 border-opacity-90 rounded-xl">
                    <div className="bg-slate-400 animate-pulse rounded-xl" style={{height: 220, width: 289}}/>
                </div>
            </div>

            <div className="block my-3 h-10 w-16 bg-slate-400 animate-pulse rounded-xl" />
            <div className="block h-7 w-11/12 bg-slate-400 animate-pulse rounded-lg" />
        
            <div className="flex gap-5 flex-col mt-3 align-bottom">
                <div className="h-4 py-8 bg-slate-400 rounded-md animate-pulse"></div>
                <div className="h-4 py-8 bg-slate-400 rounded-md animate-pulse"></div>
                <div className="h-4 py-8 bg-slate-400 rounded-md animate-pulse"></div>
            </div>
        </div>

        <div className="flex justify-between items-center w-full mt-4">
            <button disabled className="block w-28 h-10 disabled:bg-slate-400 p-2 rounded-xl px-6 animate-pulse" />
            <button disabled className="block w-28 h-10 disabled:bg-slate-400 p-2 rounded-xl px-6 animate-pulse" />
        </div>

        </div>
    );
}