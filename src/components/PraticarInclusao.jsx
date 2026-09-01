import TittleTwo from "../tags/TittleTwo";
import getImage from "/src/assets/DiversasPessoas.avif"
export default function PraticarInclusao() {
  return (
    <section id="Pratica">
      <TittleTwo>Como Podemos Praticar a Inclusão Social?</TittleTwo>
      <div className="lg:flex gap-5 xl:gap-10 items-start my-5">
        <figure className="relative">
          <img
            src={getImage}
            alt="diversasPessoas"
            className="object-cover lg:max-w-[450px] aspect-[3/4]"
          />{" "}
          <figcaption className="absolute inset-0 bg-black/20 text-[clamp(0.5rem,5vw,1.5rem)] text-white ">
            <div className="mt-5 ml-5">
              "Inclusão não é fazer com que todos sejam iguais,
              <br /> mas garantir que todos tenham as mesmas
              <br /> oportunidades, respeitando suas diferenças_"
            </div>
          </figcaption>
        </figure>
        <ul className="flex gap-5 flex-col">
          <li>
            <strong>Na escola:</strong> respeitar colegas com necessidades
            diferentes, combater o bullying e valorizar a diversidade em trabalhos
            e atividades em grupo.
          </li>
          <li>
            <strong>No trabalho:</strong> apoiar políticas de contratação
            inclusiva e ambientes acessíveis.
          </li>
          <li>
            <strong>Na comunidade:</strong> apoiar projetos sociais, denunciar
            discriminação e ouvir quem vive a exclusão na prática.
          </li>
          <li>
            <strong>No dia a dia:</strong> rever preconceitos, aprender sobre
            realidades diferentes da nossa e agir com empatia.
          </li>
        </ul>
      </div>
    </section>
  );
}
