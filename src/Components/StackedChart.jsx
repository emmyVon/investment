import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: false,
    },
    gridLines: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    // type: "logarithmic",
    x: {
      stacked: true,
    },
    y: { stacked: true },
  },
};

const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      barThickness: 6,

      label: "Dataset 1",
      data: [40, 50, 30, 65, 60, 20, 30, 50, 25, 30, 25, 20],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      barThickness: 6,
      label: "Dataset 2",
      data: [20, 25, 30, 10, 20, 15, 15, 20, 20, 35, 35, 10],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      barThickness: 6,
      borderRadius: 50,
      label: "Dataset 3",
      data: [20, 25, 35, 10, 25, 60, 10, 15, 30, 10, 30, 45],
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

const StackedChart = () => {
  return <Bar options={options} data={data} />;
};

export default StackedChart;
