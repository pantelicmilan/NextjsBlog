"use client"
export default function Error({error, reset}: {
    error: Error, 
    reset: ()=> void
}){
    return(
        <div className="p-[2rem] flex gap-[1rem] error-wrapper">
            <p className="text-[1.5rem]">Greška: {error.message}</p>
            <button className="text-[white] p-[.5rem] text-[1rem] bg-red-500 rounded-xl transition-colors duration-300 hover:bg-red-800 focus:bg-red-800" onClick={()=>reset()}>Pokusaj opet</button>
        </div>
    )
}