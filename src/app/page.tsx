import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'MyBlog Home',
  description: 'ISR Example',
  keywords: ['isr', 'test', 'nextjs', 'tailwind' ]
}

export default async function Home() {



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-[2rem]">Ovaj blog sluzi kao primer koriscenja ISR - a kod prikaza pojedinacnih stranica gde dobijanje novih podataka u trenutku nije nuzno, radi optimizacije performansi </h1>
      </main>

    </div>
  );
}
