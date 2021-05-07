import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/request';

type SeriesData = {
  name: string;
  data: Array<number>;
}

type ChartData = {
  labels: {
    categories: Array<string>;
  };
  series: Array<SeriesData>;
}

const BarChart: React.FC = () => {

  const [charData, setCharData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  })


  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`)
      .then((response) => {
        const data = response.data as SaleSuccess[];
        const mySeries = data.map(serie => round((100 * serie.deals / serie.visited), 1));
        const myLabels = data.map(seller => seller.sellerName);
        console.log(response)
        setCharData({
          labels: {
            categories: myLabels
          },
          series: [
            {
              name: "% Success",
              data: mySeries
            }
          ]
        });
      })

  }, [])


  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  // const mockData = {
  //   labels: {
  //     categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  //   },
  //   series: [
  //     {
  //       name: "% Sucesso",
  //       data: [43.6, 67.1, 67.7, 45.6, 71.1]
  //     }
  //   ]
  // };

  return (
    <Chart
      options={{ ...options, xaxis: charData.labels }}
      series={charData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;