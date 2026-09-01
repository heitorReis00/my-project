import React from "react";

const TabelaGrafico = ({
  dados,
  colunaValor = "Valor",
  corBorda = "border-gray-300",
  corTexto = "text-gray-800",
  formatarValor,
}) => {
  if (!dados || dados.length === 0) return null;

  // Descobre automaticamente qual é a chave do valor numérico
  // (a única chave que não é "info2")
  const chaveValor = Object.keys(dados[0]).find((chave) => chave !== "info2");

  return (
    <table className="w-full mt-4 text-sm border-collapse">
      <thead>
        <tr className={`border-b-2 ${corBorda}`}>
          <th className="text-left py-2 pr-4 font-semibold text-white">
            Categoria
          </th>
          <th className="text-left py-2 font-semibold text-white">
            {colunaValor}
          </th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="py-2 pr-4">{item.info2}</td>
            <td className={`py-2 font-semibold ${corTexto}`}>
              {formatarValor ? formatarValor(item[chaveValor]) : item[chaveValor]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaGrafico;