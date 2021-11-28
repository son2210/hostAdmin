import React, { useState, useEffect, memo } from 'react';
import { Bar } from 'react-chartjs-2';
import { genData, options } from './../../constants/dashboard.constants';

import { BoxTitleDashboard } from 'styles/common/common-styles';
import { BoxChartMain } from './BoxChart.styles';

const BoxChart = () => {
  const [data, setData] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BoxChartMain>
      <BoxTitleDashboard>Biểu đồ</BoxTitleDashboard>
      <Bar data={data} options={options} />
    </BoxChartMain>
  );
};

export default memo(BoxChart);
