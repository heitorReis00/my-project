import TabelaGrafico from "./TabelaGrafico";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LinearScale,
  BarElement,
  CategoryScale,
} from "chart.js";


ChartJs.register(LinearScale, CategoryScale, BarElement);

const arrGrafico = [
  { info2: "Homens", salarioMedio: 3993.26 },
  { info2: "Mulheres", salarioMedio: 3449 },
];

const data = {
  datasets: [
    {
      label: "info",
      data: arrGrafico,
      backgroundColor: "#FEC20B",
      barThickness: 40,
      parsing: {
        xAxisKey: "info2",
        yAxisKey: "salarioMedio",
      },
    },
  ],
};

const chartOptions = {
  scales: {
    x: {
      grid: { display: false },
      type: "category",
      position: "bottom",
    },
    y: {
      beginAtZero: true,
    },
  },
};

const GrafGenero = () => {
 return (
    <div>
      <Bar data={data} options={chartOptions} />
      <p>
        <TabelaGrafico
          dados={arrGrafico}
          colunaValor="Salário médio (R$)"
          corBorda="border-yellow-400"
          corTexto="text-yellow-600"
          formatarValor={(v) => `R$ ${v.toLocaleString("pt-BR")}`}
        />
      </p>
    </div>
  );
};

export default GrafGenero;
