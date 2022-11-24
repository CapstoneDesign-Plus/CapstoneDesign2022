import ApexCharts from "react-apexcharts";
import countDate from "../../../lib/countDate";

const StatisticUnit = ({ data }) => {
  const state = countDate(data.data);

  const arr = Object.keys(state).sort();

  const values = [];

  arr.forEach((key) => values.push(state[key]));

  return (
    <ApexCharts
      typs="line"
      series={[
        {
          name: data.name,
          data: values,
        },
      ]}
      options={{
        chart: {
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: `${data.name} 코스 식권 사용량`,
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: arr,
        },
      }}
    />
  );
};

export default StatisticUnit;
