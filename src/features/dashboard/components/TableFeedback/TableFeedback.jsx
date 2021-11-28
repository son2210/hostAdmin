import React, { memo } from 'react';

import { WrapTable } from './TableFeedback.styles';
import { BoxTitleDashboard } from 'styles/common/common-styles';
import {
  TableCustom,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from 'components/Table/TableCustom';
import { DATA_FAKE } from './../../constants/dashboard.constants';

const TableFeedback = () => {
  return (
    <WrapTable>
      <BoxTitleDashboard>Phản hồi mới nhất</BoxTitleDashboard>
      <div className="group-table">
        <TableCustom>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Sản phẩm</Th>
              <Th className="fix-sort">Người đánh giá</Th>
              <Th>Nội dung</Th>
              <Th>Thời gian</Th>
            </Tr>
          </Thead>

          <Tbody>
            {DATA_FAKE.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.product}</Td>
                <Td>{row.name}</Td>
                <Td>{row.content}</Td>
                <Td>{row.time}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableCustom>
      </div>
    </WrapTable>
  );
};

export default memo(TableFeedback);
