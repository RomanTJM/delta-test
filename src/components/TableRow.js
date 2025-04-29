import React from 'react';
import ChartRow from './ChartRow';

const TableRow = ({ 
  type,
  title, 
  data, 
  isSelected, 
  chartData,
  onRowClick,
  calculatePercentage,
  getPercentageClass 
}) => {
  const getHighlightClass = (value) => {
    return value === 500521 ? 'highlight-value' : '';
  };

  const percentage = calculatePercentage(data.current, data.yesterday);
  const percentageClass = getPercentageClass(percentage);

  return (
    <>
      <tr 
        onClick={() => onRowClick(type, title)}
        className={isSelected ? 'selected' : ''}
      >
        <td>{title}</td>
        <td className={getHighlightClass(data.current)}>{data.current}</td>
        <td className={`combined-cell ${getHighlightClass(data.yesterday)} ${percentageClass}`}>
          <div>{data.yesterday}</div>
          <div className={percentageClass}>
            {percentage}%
          </div>
        </td>
        <td className={getHighlightClass(data.weekAgo)}>{data.weekAgo}</td>
      </tr>
      {isSelected && <ChartRow title={title} data={chartData} />}
    </>
  );
};

export default TableRow; 