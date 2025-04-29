import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ data, title }) => {
  // Находим максимальное значение для расчета делений оси Y
  const maxValue = Math.max(...data);
  const yAxisPoints = 6; // Количество точек на оси Y
  
  // Создаем массив с точками для оси Y
  const tickPositions = Array.from({ length: yAxisPoints }, (_, i) => 
    Math.round((maxValue * i) / (yAxisPoints - 1))
  );

  const options = {
    accessibility: {
      enabled: false
    },
    title: {
      text: undefined
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'line',
      height: 300,
      marginTop: 20,
      marginRight: 20,
      marginBottom: 30,
      marginLeft: 40,
      backgroundColor: 'transparent',
      spacing: [20, 20, 20, 20]
    },
    xAxis: {
      categories: ['•', '•', '•', '•', '•', '•', '•'],
      lineColor: '#e0e0e0',
      tickColor: '#e0e0e0',
      labels: {
        style: {
          color: '#666',
          fontSize: '16px'
        },
        y: 15
      },
      gridLineWidth: 0,
      lineWidth: 1,
      tickWidth: 0,
      minPadding: 0.05,
      maxPadding: 0.05
    },
    yAxis: {
      title: {
        text: null
      },
      min: 0,
      gridLineWidth: 0,
      lineWidth: 1,
      lineColor: '#e0e0e0',
      tickPositions: tickPositions,
      labels: {
        enabled: true,
        align: 'right',
        x: -10,
        formatter: function() {
          return '•';
        },
        style: {
          color: '#666',
          fontSize: '16px'
        }
      },
      tickWidth: 0,
      tickLength: 0,
      minPadding: 0,
      maxPadding: 0.05
    },
    series: [{
      name: title,
      data: data,
      color: '#4CAF50',
      marker: {
        symbol: 'circle',
        radius: 4,
        lineWidth: 1,
        lineColor: '#4CAF50',
        fillColor: '#fff'
      },
      lineWidth: 2,
      states: {
        hover: {
          lineWidth: 2
        }
      }
    }],
    plotOptions: {
      line: {
        marker: {
          enabled: true
        }
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderWidth: 0,
      shadow: true,
      style: {
        fontSize: '12px'
      },
      formatter: function() {
        return `<b>${this.y}</b>`;
      }
    }
  };

  return (
    <div className="chart-container">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default Chart; 