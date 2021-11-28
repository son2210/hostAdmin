import React, { memo } from 'react';

import { ContentDashboard } from './DashboardScreen.styles';
import BoxCard from './../../components/BoxCard/BoxCard';
import BoxMessage from '../../components/BoxMessage/BoxMessage';
import BoxChart from './../../components/BoxChart/BoxChart';
import BoxView from './../../components/BoxView/BoxView';
import TableFeedback from './../../components/TableFeedback/TableFeedback';

const DashboardScreen = () => {
  return (
    <ContentDashboard>
      <div className="wrap-left">
        <BoxCard />

        <BoxChart />

        <TableFeedback />
      </div>

      <div className="wrap-right">
        <BoxMessage />

        <BoxView />
      </div>
    </ContentDashboard>
  );
};

export default memo(DashboardScreen);
