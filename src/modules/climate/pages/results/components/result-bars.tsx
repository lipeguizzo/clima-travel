import { ChartDataset } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, Tooltip, Legend, Title, LinearScale, registerables } from 'chart.js';
Chart.register(CategoryScale, LinearScale, Tooltip, Legend, Title, ...registerables);

interface Props {
  title: string;
  labels: string[];
  datasets: ChartDataset<'bar', number[]>[];
}

export function ResultBars({ title, labels, datasets }: Props) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <>
      <Bar
        width={'300px'}
        height={'300px'}
        options={options}
        data={{
          labels: labels,
          datasets: datasets,
        }}
      />
    </>
  );
}
