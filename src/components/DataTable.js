import React, { useState } from 'react';
import './DataTable.css';
import { tableData, chartData } from '../data/mockData';
import TableRow from './TableRow';

const DataTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const calculatePercentage = (current, previous) => {
    const diff = ((current - previous) / previous) * 100;
    return diff.toFixed(0);
  };

  const getPercentageClass = (percentage) => {
    if (percentage > 0) return 'positive';
    if (percentage < 0) return 'negative';
    return '';
  };

  const handleRowClick = (type) => {
    setSelectedRow(selectedRow === type ? null : type);
  };

  const renderTableRow = (type, title, data) => (
    <TableRow
      key={type}
      type={type}
      title={title}
      data={data}
      isSelected={selectedRow === type}
      chartData={chartData[type]}
      onRowClick={handleRowClick}
      calculatePercentage={calculatePercentage}
      getPercentageClass={getPercentageClass}
    />
  );

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Показатель</th>
            <th>Текущий день</th>
            <th>Вчера</th>
            <th>Этот день недели</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRow('revenue', 'Выручка, руб', {
            current: tableData.current.revenue,
            yesterday: tableData.yesterday.revenue,
            weekAgo: tableData.weekAgo.revenue
          })}
          {renderTableRow('cash', 'Наличные', {
            current: tableData.current.cash,
            yesterday: tableData.yesterday.cash,
            weekAgo: tableData.weekAgo.cash
          })}
          {renderTableRow('cashless', 'Безналичный расчет', {
            current: tableData.current.cashless,
            yesterday: tableData.yesterday.cashless,
            weekAgo: tableData.weekAgo.cashless
          })}
          {renderTableRow('creditCards', 'Кредитные карты', {
            current: tableData.current.creditCards,
            yesterday: tableData.yesterday.creditCards,
            weekAgo: tableData.weekAgo.creditCards
          })}
          {renderTableRow('averageCheck', 'Средний чек, руб', {
            current: tableData.current.averageCheck,
            yesterday: tableData.yesterday.averageCheck,
            weekAgo: tableData.weekAgo.averageCheck
          })}
          {renderTableRow('averageGuest', 'Средний гость, руб', {
            current: tableData.current.averageGuest,
            yesterday: tableData.yesterday.averageGuest,
            weekAgo: tableData.weekAgo.averageGuest
          })}
          {renderTableRow('tipsPaid', 'Удаления из чека (после оплаты), руб', {
            current: tableData.current.tipsPaid,
            yesterday: tableData.yesterday.tipsPaid,
            weekAgo: tableData.weekAgo.tipsPaid
          })}
          {renderTableRow('tipsUnpaid', 'Удаления из чека (до оплаты), руб', {
            current: tableData.current.tipsUnpaid,
            yesterday: tableData.yesterday.tipsUnpaid,
            weekAgo: tableData.weekAgo.tipsUnpaid
          })}
          {renderTableRow('checksCount', 'Количество чеков', {
            current: tableData.current.checksCount,
            yesterday: tableData.yesterday.checksCount,
            weekAgo: tableData.weekAgo.checksCount
          })}
          {renderTableRow('guestsCount', 'Количество гостей', {
            current: tableData.current.guestsCount,
            yesterday: tableData.yesterday.guestsCount,
            weekAgo: tableData.weekAgo.guestsCount
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable; 