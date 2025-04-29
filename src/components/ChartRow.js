import React from 'react';
import Chart from './Chart';

const ChartRow = ({ title, data }) => {
  return (
    <tr className="chart-row">
      <td colSpan="5">
        <Chart 
          data={data}
          title={title}
        />
      </td>
    </tr>
  );
};

export default ChartRow; 