import { ChartDataset } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend, Title);

interface Props {
  title: string;
  labels: string[];
  datasets: ChartDataset<'doughnut', number[]>[];
}

export function ResultDoughnut({ title, labels, datasets }: Props) {
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
      <Doughnut
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
