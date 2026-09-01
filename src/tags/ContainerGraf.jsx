import TittleThree from "./TittleThree";
import { GoGraph } from "react-icons/go";
import { CiViewTable } from "react-icons/ci";
import { useState } from "react";
import TabelaGrafico from "../components/TabelaGrafico";

export default function ContainerGraf({ tittle, children, colors, }) {

const [trocar, setTrocar] = useState("A")



  return (
    <div className={`border mt-5 border-${colors} rounded-lg p-5`}>
        <h3
          className={`text-xl font-semibold mb-5 text-${colors}
    `}
        >
          {tittle}
        </h3>
        

      <div>{trocar === "A" && children}
        {trocar === "B" && 
      <TabelaGrafico/>
       

        }




      </div>
    </div>
  );
}