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
  { info2: "Pessoas brancas", rendaMedia: 3847 },
  { info2: "Pessoas pretas ou pardas", rendaMedia: 2264 },
];

const data = {
  datasets: [
    {
      label: "info",
      data: arrGrafico,
      backgroundColor: "#B21213",
      barThickness: 40,
      parsing: {
        xAxisKey: "info2",
        yAxisKey: "rendaMedia",
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

const GrafCores = () => {
  return (
    <div>
      <Bar data={data} options={chartOptions} />
      <p>
        <TabelaGrafico
          dados={arrGrafico}
          colunaValor="Renda média (R$)"
          corBorda="border-red-600"
          corTexto="text-red-600"
          formatarValor={(v) => `R$ ${v.toLocaleString("pt-BR")}`}
        />
      </p>
    </div>
  );
};

export default GrafCores;
