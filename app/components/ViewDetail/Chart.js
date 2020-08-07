import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import '../../../assets/styles/components/Table.scss';

const test = stroke => {
  console.log(stroke);
};

const ExpenseChart = ({ handleDataClick, expenses }) => (
  <div id="chart-container">
    <ResponsiveContainer>
      <LineChart
        width={500}
        height={300}
        data={expenses}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="latitude" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          activeDot={{ onClick: handleDataClick }}
          dot={{ strokeWidth: 2 }}
          type="monotone"
          dataKey="longitude"
          stroke={test}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ExpenseChart;
