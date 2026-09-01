import Icon from "../tags/icon"

export default function Heading() {
    return (
<header className="justify-between items-center flex fixed inset-0 z-60 bg-black/50 backdrop-blur-md h-fit px-8 py-3 max-w-[1200px] mx-auto">
    <Icon/>

    <nav className="hidden md:block md:flex md:gap-5  text-blue-300 font-semibold">
<a className="transition duration-300 hover:scale-110" href="#Introducao">Introducão</a>
<a className="transition duration-300 hover:scale-110" href="#Conceito">Conceito</a>
<a className="transition duration-300 hover:scale-110" href="#Importancia">Importância</a>
<a className="transition duration-300 hover:scale-110" href="#Pratica">Prática</a>
<a className="transition duration-300 hover:scale-110" href="#Desigualdades">Desigualdades</a>
<a className="transition duration-300 hover:scale-110" href="#Conclusao">Conclusao</a>
    </nav>
</header>
    )
}