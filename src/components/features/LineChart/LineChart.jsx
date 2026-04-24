import React, { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
);

import classes from "./LineChart.module.scss";

export default function LineChart({ activePatient }) {
  const [period, setPeriod] = useState(6);

  const labels = activePatient
    ? activePatient.diagnosis_history
        .slice(0, period)
        .map((diagnosis) => `${diagnosis.month.slice(0, 3)}, ${diagnosis.year}`)
        .reverse()
    : [];

  const systolicData = activePatient
    ? activePatient.diagnosis_history
        .slice(0, period)
        .map((diagnosis) => diagnosis.blood_pressure.systolic.value)
        .reverse()
    : [];

  const diastolicData = activePatient
    ? activePatient.diagnosis_history
        .slice(0, period)
        .map((diagnosis) => diagnosis.blood_pressure.diastolic.value)
        .reverse()
    : [];

  const data = {
    labels: labels,
    datasets: [
      {
        data: systolicData,

        label: "Systolic Blood Pressure",
        backgroundColor: "#C26EB4",
        borderColor: "#C26EB4",

        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#fff",
      },
      {
        data: diastolicData,

        label: "Diastolic Blood Pressure",
        backgroundColor: "#7E6CAB",
        borderColor: "#7E6CAB",

        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#fff",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 7,
        hoverRadius: 8,
        borderWidth: 1,
      },
      line: {
        tension: 0.4,
        cubicInterpolationMode: "monotone",
        borderWidth: 2,
        borderColor: "#C26EB4",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: "#CBC8D4",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className={`${classes.chartHeader} flex_between`}>
        <h3>Blood Pressure</h3>
        <select
          name="period"
          id="period"
          value={period}
          onChange={(e) => setPeriod(Number(e.target.value))}
        >
          <option value={6}>6 months</option>
          <option value={12}>12 months</option>
          <option value={24}>24 months</option>
        </select>
      </div>

      <Line data={data} options={options} />
    </div>
  );
}
