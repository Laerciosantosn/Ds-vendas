import axios from 'axios';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

type ChartData = {
  series: Array<string>;
  labels: Array<number>;
}

const DonutChart: React.FC = () => {

  // const [chartData, setChartData] = useState<ChartData>([]);

  axios.get(`${BASE_URL}/sales/amount-by-seller`)
  .then((response) => {
    const data = response.data as SaleSum[];
    const mySeries = data.map(sellerSum => sellerSum.sum);
    const myLabels = data.map(seller => seller.sellerName);

    console.log(mySeries)
    console.log(myLabels)
  })

  // let chartData: ChartData = { labels: [], series: []};

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
}

const options = {
    legend: {
        show: true
    }
}
  return (
    <Chart 
    options={{...options, labels: mockData.labels}}
    series={mockData.series}
    type="donut"
    height="240"
  />
  );
}

export default DonutChart;