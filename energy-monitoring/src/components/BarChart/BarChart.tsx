// components/BarChart.tsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js 구성 요소를 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  size: { width: string; height: string };
  label?: string;
  labels: string[];
  value: number[] | string[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

const BarChart = ({
  size,
  label,
  labels,
  value,
  backgroundColor,
  borderColor,
  borderWidth,
}: BarChartProps) => {
  // 차트 데이터
  const data = {
    labels: labels, // x축 레이블
    datasets: [
      {
        label: label ? label : "",
        data: value, // y축 값
        backgroundColor: backgroundColor, // 막대의 배경 색상
        borderColor: borderColor, // 막대의 경계 색상
        borderWidth: borderWidth, // 경계 두께
      },
    ],
  };

  // 차트 옵션 (선택사항)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: size.width, height: size.height }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
