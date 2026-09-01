import TittleTwo from "../tags/TittleTwo";
import ContainerGraf from "../tags/ContainerGraf";
import GrafDeficientes from "./GrafDeficientes";
import GrafCores from "./GrafCores";
import GrafGenero from "./GrafGenero";
import { useState } from "react";

export default function Graficos() {
  const colorClasses = {
    "blue-600": { border: "border-blue-600", text: "text-blue-600" },
    "red-600": { border: "border-red-600", text: "text-red-600" },
    "yellow-400": { border: "border-yellow-400", text: "text-yellow-400" },
  };

const [trocarOne, setTrocarOne] = useState("A");

  return (
    <section id="Desigualdades" className="lg:flex gap-5 xl:gap-10">
      <div>
        <TittleTwo>O Retrato da Desigualdade em Números</TittleTwo>
        <p>
          Falar sobre inclusão social não é só uma questão de valores — é também
          uma questão de dados. Os números abaixo, extraídos de pesquisas do IBGE,
          mostram como pessoas com deficiência, pessoas negras e mulheres ainda
          enfrentam desvantagens reais no mercado de trabalho brasileiro. A
          desigualdade não é apenas percepção: ela aparece nos indicadores.
        </p>
        <div className="flex gap-3 mt-5">
          <button
            onClick={() => setTrocarOne("A")}
            className={`w-4 h-4 rounded-full transition duration-800 ${trocarOne === "A" ? "bg-blue-600 w-10 " : "bg-gray-400"}`}
          ></button>
          <button
            onClick={() => setTrocarOne("B")}
            className={`w-4 h-4 rounded-full transition duration-800 ${trocarOne === "B" ? "bg-red-600 w-10 " : "bg-gray-400"}`}
          ></button>
          <button
            onClick={() => setTrocarOne("C")}
            className={`w-4 h-4 rounded-full transition duration-800 ${trocarOne === "C" ? "bg-yellow-400 w-10 " : "bg-gray-400"}`}
          ></button>
      </div>
      </div>
<div className="lg:min-w-[450px]">
  
  {trocarOne === "A" && <ContainerGraf
          tittle="Taxa de ocupação no mercado de trabalho (%)"
          colors="blue-600"
        >
          <GrafDeficientes />
        </ContainerGraf>}
  
       {trocarOne === "B" && <ContainerGraf
          tittle="Renda média mensal por cor/raça (2023)"
          colors="red-600"
        >
          <GrafCores />
        </ContainerGraf>}
  
  
  {trocarOne === "C" &&    <ContainerGraf
          tittle="Salário médio mensal por gênero (2023)"
          colors="yellow-400"
        >
          <GrafGenero />
        </ContainerGraf>}
</div>
      
   
    </section>
  );
}
