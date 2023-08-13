export default function profilePage({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
           <h1 className="text-center text-white text-4xl mb-10">User Profile </h1>
           <span className="p-2 bg-orange-400 text-white rounded-xl">{params.id}</span>
        </div>
    )
}