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

export const arrGrafico = [
  { info2: "Pessoas com deficiência", porcentagemDePessoas: 26.6 },
  { info2: "Pessoas sem deficiência", porcentagemDePessoas: 60.7 },
];

const data = {
  datasets: [
    {
      label: "info",
      data: arrGrafico,
      backgroundColor: "#193CB8",
      barThickness: 40,
      parsing: {
        xAxisKey: "info2",
        yAxisKey: "porcentagemDePessoas",
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

const GrafDeficientes = () => {
  return (
    <div>
      {" "}
      <Bar data={data} options={chartOptions} />
      <p>
        <TabelaGrafico
          dados={arrGrafico}
          colunaValor="Taxa de ocupação (%)"
          corBorda="border-blue-800"
          corTexto="text-blue-800"
          formatarValor={(v) => `${v}%`}
        />
      </p>
      </div>
  );
};

export default GrafDeficientes;
