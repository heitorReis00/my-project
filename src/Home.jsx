import Heading from "./components/heading";
import DireitoDeTodos from "./components/DireitosDeTodos";
import Definicao from "./components/Definicao";
import Porque from "./components/Porque";
import PraticarInclusao from "./components/PraticarInclusao";
import GrafDeficientes from "./components/GrafDeficientes";
import Graficos from "./components/Graficos";
import Conclusao from "./components/Conclusao";
import Spacing from "./components/spacing"; 
import Footering from "./components/footering";
function Home() {
  return (
   
       
      
        <div className="m-auto overflow-hidden max-w-[1220px] px-5 lg:px-8 gap-20 ">
         <Heading/>
          <main className="mt-30">
           <DireitoDeTodos/>
        
        <Spacing/>
          <Definicao/>
          <Spacing/>
          <Porque/>
          <Spacing/>
          <PraticarInclusao/>
          <Spacing/>
         <Graficos/>
         <Spacing/>
           <Conclusao/>
          </main>
          <Footering/>
        </div>
     
  );
}

export default Home;
