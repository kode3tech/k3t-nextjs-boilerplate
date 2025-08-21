import Image from 'next/image'

const Main = () => (
  <main className="flex flex-col justify-center items-center h-screen gap-5">
    <h1 className="flex text-9xl font-bold font-primary">Kode3 Tech</h1>
    <p className="text-4xl font-secondary">
      Transformamos ideias em soluções eficientes e inovadoras.
    </p>
    <Image src="logo.svg" alt="Kode3 Tech" width={200} height={200} priority />
  </main>
)

export default Main
