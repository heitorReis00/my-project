import getImage from "/src/assets/variasPessoas.avif"

export default function Conclusao() {
    return (
        <section id="Conclusao">
            <figure className="lg:flex flex-row-reverse gap-5 mb-25">
                <figcaption className="mb-5">
                    <p>A inclusão social não é responsabilidade apenas do governo ou de instituições — é uma construção coletiva, que começa nas atitudes do dia a dia. Cada gesto de respeito, cada espaço adaptado e cada oportunidade oferecida sem distinção nos aproxima de uma sociedade verdadeiramente justa e igualitária.</p>
                </figcaption>
                <img src={getImage} alt="conclusao" className="object-cover max-w-[500px]" />
            </figure>
        </section>
    )
}