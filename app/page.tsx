import Link from "next/link";

export default function Home() {
   return (
      <main className="min-h-screen w-full flex justify-center items-center">
         <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold"> Welcome to Contact App</h1>
            <Link
               className="underline text-sm text-center"
               href={"/contacts?page=1"}
            >
               Next to App
            </Link>
         </div>
      </main>
   );
}
