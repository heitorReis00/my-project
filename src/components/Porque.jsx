import TittleTwo from "../tags/TittleTwo";
import { useState } from "react";
import TextA from "./textA";
import TextB from "./textB";
import TextC from "./textC";
import TextD from "./textD";
import Buttons from "../tags/Buttons";

export default function Porque() {
  const [trocar, setTrocar] = useState("A");

  return (
    <section id="Importancia" className="lg:flex flex-row-reverse gap-5 justify-end">
      <div>
        <TittleTwo>Por que a Inclusão Social é Importante?</TittleTwo>
        <p>
          Uma sociedade inclusiva é uma sociedade mais forte, criativa e justa.
          Quando todas as pessoas têm oportunidades reais de participar, todos
          ganham:
        </p>
        <div className="flex flex-col items-start gap-3 my-5 lg:items-end">
            <Buttons><button className={`px-4 rounded-sm ${trocar === "A" && "bg-amber-400"}`} onClick={() => setTrocar("A")}>Redução das desigualdades</button></Buttons>
          <Buttons><button className={`px-4 rounded-sm ${trocar === "B" && "bg-amber-400"}`} onClick={() => setTrocar("B")}>Valorização da diversidade</button></Buttons>
          <Buttons><button className={`px-4 rounded-sm ${trocar === "C" && "bg-amber-400"}`} onClick={() => setTrocar("C")}>Fortalecimento da democracia</button></Buttons>
          <Buttons><button className={`px-4 rounded-sm ${trocar === "D" && "bg-amber-400"}`} onClick={() => setTrocar("D")}>Desenvolvimento humano e econômico</button></Buttons>
      </div>
</div>

      <div className="lg:h-full lg:max-w-[400px]">
        {trocar === "A" && <TextA/> }
        {trocar === "B" && <TextB/>}
        {trocar === "C" && <TextC/>}
        {trocar === "D" && <TextD/>}
      </div>
    </section>
  );
}
