import Banner from "/src/assets/bannerImg.jpg";

export default function DireitoDeTodos() {
  return (
    <section id="Introducao">
      <figure className="relative flex">
        <img src={Banner} alt="ImagemDoBanner" className="md: aspect-[4/3] object-cover" />
        <figcaption className="absolute z-50 inset-0 flex items-center justify-center bg-black/20">
          <h1 className="text-white text-[clamp(1.5rem,5vw,3rem)]">
            <strong>Inclusão Social</strong>
            <br /> Um Direito de Todos,
            <br /> Um Dever de Cada Um_
          </h1>
        </figcaption>
      </figure>
      <p className="mt-5">
        Construir uma sociedade mais justa começa quando garantimos que ninguém
        fique para trás — seja por causa de deficiência, cor, gênero, idade,
        orientação sexual ou condição social.
      </p>
    </section>
  );
}