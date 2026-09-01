import TittleTwo from "../tags/TittleTwo"
import TextDef from "./textDef"
import { useState } from "react"
import Buttons from "../tags/Buttons"

export default function Definicao() {

const [mais, setMais] = useState(false)

function HandleClickMais() {
  setMais(!mais)
}

    return (
        <section id="Conceito">
      <figure className="lg:flex mt-5 gap-5 xl:gap-10">
                  <figcaption> <TittleTwo>O que é Inclusão Social?</TittleTwo>
                  <p>
         Inclusão social é o processo de garantir que todas as pessoas,
         independentemente de suas características, condições físicas,
         sociais ou culturais, tenham acesso pleno e igualitário a
         oportunidades, direitos e espaços na sociedade.
                  </p>{mais && <TextDef/>}
         <Buttons><button  className={`px-4 rounded-sm ${mais && "bg-amber-400"}`} onClick={HandleClickMais}>Ler mais...</button></Buttons></figcaption>
        
         <img src="/src/assets/Reuniao.jpg" alt="" className="object-cover my-5 lg:aspect-[3/5] aspect-[3/4] lg:max-w-[450px]"  />
      </figure>
        </section>
    )
}