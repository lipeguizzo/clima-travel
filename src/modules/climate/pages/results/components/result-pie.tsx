import { ChartDataset } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend, Title);

interface Props {
  title: string;
  labels: string[];
  datasets: ChartDataset<'pie', number[]>[];
}

export function ResultPie({ title, labels, datasets }: Props) {
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
      <Pie
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
