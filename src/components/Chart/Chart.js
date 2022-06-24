import React from 'react';
import ChartBar from './ChartBar.js';
import './Chart.css';

const Chart = props => {
  const dataPointsValuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValuesArray); //const arr=[1,3,5,3]; Math.max(..arr)

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
