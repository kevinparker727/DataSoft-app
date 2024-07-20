import { months } from "@/helper/Util";

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Transactions",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData1 = {
  labels: ["Sales", "Revenue", "Profit"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [300, 50, 100],
      backgroundColor: ["rgb(255,137,168)", "rgb(178,3,106)", "rgb(165,7,42)"],
      hoverOffset: 4,
    },
  ],
};
export const doughnutChartData2 = {
  labels: ["Sales", "Revenue", "Profit"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [120, 348, 170],
      backgroundColor: ["rgb(255,137,168)", "rgb(178,3,106)", "rgb(165,7,42)"],
      hoverOffset: 4,
    },
  ],
};
export const doughnutChartData3 = {
  labels: ["Sales", "Revenue", "Profit"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [105, 80, 70],
      backgroundColor: ["rgb(255,137,168)", "rgb(178,3,106)", "rgb(165,7,42)"],
      hoverOffset: 4,
    },
  ],
};
export const doughnutChartData4 = {
  labels: ["Sales", "Revenue", "Profit"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [300, 500, 700],
      backgroundColor: ["rgb(255,137,168)", "rgb(178,3,106)", "rgb(165,7,42)"],
      hoverOffset: 4,
    },
  ],
};
