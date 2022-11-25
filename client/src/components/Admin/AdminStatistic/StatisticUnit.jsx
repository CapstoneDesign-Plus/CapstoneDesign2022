import countDate from "../../../lib/countDate";
import { lazy } from "react";
const ApexCharts = lazy(() => import("react-apexcharts"));

const StatisticUnit = ({ data }) => {
  const state = countDate(data);

  const arr = Object.keys(state).sort();

  const values = [];

  arr.forEach((key) => values.push({ key, count: state[key] }));

  return (
    <ApexCharts
      typs="line"
      series={[
        {
          name: "A",
          data: values.map((v) => v.count["A"]),
        },
        {
          name: "B",
          data: values.map((v) => v.count["B"]),
        },
        {
          name: "C",
          data: values.map((v) => v.count["C"]),
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
          text: "코스별 식권 사용량",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: values.map((v) => v.key),
        },
      }}
    />
  );
};

export default StatisticUnit;
